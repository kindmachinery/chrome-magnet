'use strict';

(function(contextMenus, downloads, i18n){

    function getTorrentUrl(magnet) {
        return 'http://zoink.it/torrent/4BD61C045C7D397A0DE79A5CA9B2E769A7EB85EA.torrent';
    }

    contextMenus.onClicked.addListener(function(info, tab) {
        chrome.downloads.download({
            url: getTorrentUrl(info.linkUrl)
        });
    });

    contextMenus.create({
        id: 'magnet',
        title: i18n.getMessage('openContextMenuTitle'),
        contexts: ['link'],
        targetUrlPatterns: ['magnet:*']
    });
    
})(chrome.contextMenus, chrome.downloads, chrome.i18n);
