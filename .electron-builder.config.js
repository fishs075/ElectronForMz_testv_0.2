/*=============================================================================
 .electron-builder.config.js
----------------------------------------------------------------------------
 Doc : https://www.electron.build/configuration/configuration
----------------------------------------------------------------------------
 Version
 1.2.0 2023/07/23 Mac対応と全体的な見直しを行いました。
 1.0.0 2019/05/28 初版
----------------------------------------------------------------------------
 [Blog]   : https://triacontane.blogspot.jp/
 [Twitter]: https://twitter.com/triacontane/
 [GitHub] : https://github.com/triacontane/
=============================================================================*/

const fs = require('fs');
const path = require('path');

// ゲームタイトルを取得する関数
function getGameTitle() {
    const indexPath = path.join(__dirname, 'project/index.html');
    const htmlContent = fs.readFileSync(indexPath, 'utf8');
    const titleMatch = htmlContent.match(/<title>(.*?)<\/title>/);
    return titleMatch ? titleMatch[1].trim() : 'Untitled';
}

module.exports = async function () {
    const gameTitle = getGameTitle();

    return {
        appId: 'com.rpgmaker.game',
        asar: true,
        afterPack: './scripts/myAfterPackHook.js',
        directories: {
            output: 'dist'
        },

        win: {
            target: 'zip',
            icon: 'project/icon/icon-electron.png',
            artifactName: `${gameTitle}.zip`
        },
        mac: {
            target: 'dmg',
            category: 'Games',
            icon: 'project/icon/icon-electron-mac.png',
            artifactName: `${gameTitle}.dmg`
        },
        linux: {
            target: 'AppImage',
            category: 'Game',
            icon: 'project/icon/icon-electron.png',
            artifactName: `${gameTitle}.AppImage`
        }
    };
};
