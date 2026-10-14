package in.mehroos.littleanimalsounds;

import android.app.Activity;
import android.os.Bundle;
import android.speech.tts.TextToSpeech;
import android.view.View;
import android.webkit.JavascriptInterface;
import android.webkit.WebChromeClient;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import android.webkit.WebResourceRequest;
import android.webkit.WebSettings;
import java.util.Locale;

public class MainActivity extends Activity implements TextToSpeech.OnInitListener {
    private WebView webView;
    private TextToSpeech speech;
    private boolean ready = false;
    private static final String GAME_URL = "https://mehroos-in.github.io/little-animal-sounds/";

    public final class SpeechBridge {
        @JavascriptInterface
        public void say(String name) {
            runOnUiThread(() -> {
                if (ready && speech != null) {
                    speech.stop();
                    speech.speak(name, TextToSpeech.QUEUE_FLUSH, null, "animal-name");
                }
            });
        }
        @JavascriptInterface
        public void stop() {
            runOnUiThread(() -> { if (speech != null) speech.stop(); });
        }
    }

    @Override public void onCreate(Bundle state) {
        super.onCreate(state);
        getWindow().getDecorView().setSystemUiVisibility(
            View.SYSTEM_UI_FLAG_FULLSCREEN | View.SYSTEM_UI_FLAG_LAYOUT_STABLE
        );
        speech = new TextToSpeech(this, this);
        webView = new WebView(this);
        setContentView(webView);
        WebSettings settings = webView.getSettings();
        settings.setJavaScriptEnabled(true);
        settings.setDomStorageEnabled(true);
        settings.setMediaPlaybackRequiresUserGesture(false);
        settings.setCacheMode(WebSettings.LOAD_DEFAULT);
        settings.setMixedContentMode(WebSettings.MIXED_CONTENT_NEVER_ALLOW);
        webView.addJavascriptInterface(new SpeechBridge(), "AndroidSpeech");
        webView.setWebChromeClient(new WebChromeClient());
        webView.setWebViewClient(new WebViewClient() {
            @Override public boolean shouldOverrideUrlLoading(WebView view, WebResourceRequest request) {
                return !request.getUrl().toString().startsWith(GAME_URL);
            }
            @Override public void onReceivedError(WebView view, WebResourceRequest request,
                    android.webkit.WebResourceError error) {
                if (request.isForMainFrame()) {
                    view.loadDataWithBaseURL("https://mehroos-in.github.io",
                       "<html><meta name='viewport' content='width=device-width, initial-scale=1'><body style='font:20px sans-serif;background:#fffaf3;text-align:center;padding:50px 12px'><h2>Little Animal Sounds 🐾</h2><p>Connect to Wi-Fi or mobile internet and reopen the app.</p><button style='font-size:22px;padding:15px' onclick='location.href=&quot;"+ GAME_URL +"&quot;'>Retry</button></body></html>",
                       "text/html", "UTF-8", null);
                }
            }
        });
        webView.loadUrl(GAME_URL);
    }

    @Override public void onInit(int status) {
        if (status == TextToSpeech.SUCCESS && speech != null) {
            speech.setLanguage(Locale.US);
            speech.setSpeechRate(0.82f);
            ready = true;
        }
    }
    @Override public void onBackPressed() {
        if (webView != null && webView.canGoBack()) webView.goBack();
        else super.onBackPressed();
    }
    @Override protected void onDestroy() {
        if (speech != null) { speech.stop(); speech.shutdown(); }
        if (webView != null) { webView.removeJavascriptInterface("AndroidSpeech"); webView.destroy(); }
        super.onDestroy();
    }
}
