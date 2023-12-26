//
//  ViewController.swift
//  myWebView
//
//  Created by MacBook Pro - SYang on 12/22/23.
//

import UIKit
import WebKit
class ViewController: UIViewController, WKNavigationDelegate, WKUIDelegate {
    var webView: WKWebView!
    
    override func loadView() {
        let webViewConfiguration = WKWebViewConfiguration();
        webViewConfiguration.limitsNavigationsToAppBoundDomains = true;
        webView = WKWebView(frame: .zero, configuration: webViewConfiguration)
        webView.navigationDelegate = self
        webView.uiDelegate = self
        webView.isInspectable = true
        view = webView
    }
    
    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view.
        let url = URL(string: "http://localhost:3000")!
        webView.load(URLRequest(url: url))
        webView.allowsBackForwardNavigationGestures = true
    }
    
    func webView(_ webView: WKWebView, runJavaScriptAlertPanelWithMessage message: String, initiatedByFrame frame: WKFrameInfo, completionHandler: @escaping () -> Void) {
        let ac = UIAlertController(title: nil,
                                   message: message,
                                   preferredStyle: .alert)
        ac.addAction(UIAlertAction(title: "Ok",
                                   style: .default) { _ in
            completionHandler()
        })
        present(ac, animated: true)
    }
}

