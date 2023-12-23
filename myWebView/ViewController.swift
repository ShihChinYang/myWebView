//
//  ViewController.swift
//  myWebView
//
//  Created by MacBook Pro - SYang on 12/22/23.
//

import UIKit
import WebKit
class ViewController: UIViewController, WKNavigationDelegate {
    var webView: WKWebView!
    
    override func loadView() {
        let webViewConfiguration = WKWebViewConfiguration();
        webViewConfiguration.limitsNavigationsToAppBoundDomains = true;
        webView = WKWebView(frame: .zero, configuration: webViewConfiguration)
        webView.navigationDelegate = self
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
}

