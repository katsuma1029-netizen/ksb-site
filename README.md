
# KSB 初期版（JP/ID 多言語・ブラウザ編集）
- そのまま GitHub Pages に上げれば公開できます（アプリ不要）。
- 数字・写真・WhatsApp 番号は **あとで差し替え**できます。

## 変更ポイント
- WhatsApp 番号は `contact.html` の `WA_NUMBER` に入れてください。
- 実績の数字は `assets/lang/ja.json` / `id.json` の `home.kpi*` を編集。
- 写真は `assets/img/placeholder-*.jpg` を差し替え。

## 公開手順
1) GitHub で新規リポジトリ作成
2) このフォルダの中身をアップロード（ドラッグ&ドロップ）
3) Settings → Pages → Branch を `main / root` にして保存
4) 数分後に公開。独自ドメインはCNAME設定
