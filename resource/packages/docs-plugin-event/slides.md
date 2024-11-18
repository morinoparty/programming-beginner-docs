---
theme: ../theme-modern
download: true
---

# プラグインを作ってみよう
(イベント編)

---

# 目次

<Toc maxDepth="1"></Toc>

---


# プロジェクトの作成

Intellij IDEAのスタート画面から「Create New Project」を選択します。

その後、左側のメニューから「Minecraft」を選択します。

---

# プロジェクトの作成(フィールドの入力)

- 名前: `test-event`等好きな名前を選択してください。
-  場所: そのままで結構です。
- Platform Type: 今回はプラグインを作成するので、`Plugin`を選択してください。
- Platform : `Bukkit`を選択。
- Bukkit Platform: `paper`を選択。
- Minecraft Version: 作成したいバージョンを選択してください。今回は`1.21`で進めていきます。
- Plugin Name: 適当な名前を選択します。(CamelCaseで記入してください[^1])今回は`test-event`としておきます。
- Main Class: この後の入力で自動的に変化するため変更しないでください。

[^1]: CamelCaseとは、単語の区切りを大文字とするのもです。例: mechanical pencilであればMechanical Pencilとします。

---

# プロジェクトの作成(詳細な設定)

次にOptional Settingというところに行きます。
- Build System: `Gradle`を選択。
- Paper Manifest: チェックなしで進めます。

その後、Build System Propertiesに進みます。

- Group ID : ドメインを逆にしたものを使います。
- Artifact ID: 適当な名前を選択します。今回は`test-event`としておきます。
- Version: そのままでかまいません。

最後にJDKというところをの設定をします。クリックをしていただくとJDKのダウンロードという項目が出てきます。そこを押していただき、出てきたポップアップの、
- バージョン: `21`
- ベンダー: `Eclipse Temurin (AdoptOpenJDK HotSpot)`
- 場所: `変更なし`

---

# 初期設定

build.gradleを開いてください。

```diff
plugins {
    id 'java'
+   id 'xyz.jpenilla.run-paper' version "2.3.0"
}
```

このように、pluginsのところに、`id 'xyz.jpenilla.run-paper' version "2.3.0"`を追加してください。

次に、一番下に、
```groovy
tasks{
    runServer {
        minecraftVersion("1.21")
    }
}
```
を追加してください。

---

# プラグインの作成

まず、`src/main/java/com/github/<username>/testevent/Test_Event.java`を開きます
````md magic-move
```java
public final class Test_event extends JavaPlugin {

    @Override
    public void onEnable() {
        // プラグインが有効になったときの処理
    }

    @Override
    public void onDisable() {
        // プラグインが無効になったときの処理
    }
}
```

```java {2,15-17}
public final class Test_event extends JavaPlugin {
    private static Test_event plugin;

    @Override
    public void onEnable() {
        // プラグインが有効になったときの処理
        plugin = this;
    }

    @Override
    public void onDisable() {
        // プラグインが無効になったときの処理
    }

    public static Test_event getPlugin() {
        return plugin;
    }
}
```
````

---



