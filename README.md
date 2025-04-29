どうも、さかなのまえあしです。今回はトリアコンタンさんの ElectronForMz プロジェクトをベースに、ゲームタイトルを取得するようにしました。

zip ファイル作成時にゲームタイトル.zip という名前で作成されるようになりました。<br> Windows: <ゲームタイトル>.zip<br> Mac: <ゲームタイトル>.dmg<br> Linux: <ゲームタイトル>.AppImage<br>

セーブフォルダをゲームタイトルが「Project1」なら %APPDATA%/electron-for-mz/Project1<br> ゲームタイトルが「MyGame」なら %APPDATA%/electron-for-mz/MyGame<br> というようにしました。
