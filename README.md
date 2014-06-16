cql-check
=========

cql-clientを使ってCassandra native transportへの接続をテストするプログラムです。

- --host HOSTNAME
  - 接続先ホスト名
  - 省略時: localhost

## 結果

- 正常時
  - 終了ステータス: 0
  - 標準出力: 1
- 異常時
  - 終了ステータス: 2
  - 標準出力: 0

## 内部動作

- cql-clientでCassandraに接続します。
- 以下のクエリを投げて成功することを確認します。

```
select peer from system.peers;
```

