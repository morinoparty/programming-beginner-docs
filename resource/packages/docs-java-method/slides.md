---
theme: ../theme-modern
download: true
---

# メソッド

---

# 目次

<Toc maxDepth="1"></Toc>

---

# メソッドとは

メソッドは、複数の処理をまとめて名前を付けたものです。

メソッドを使うことで、同じ処理を繰り返し実行することができます。

---

# メソッドの宣言

メソッドは、次のように宣言します。

```java
修飾子 戻り値の型 メソッド名(引数リスト) {
    // メソッド本体
}
```

# 具体例

```java
public static int add(int x, int y) {
    return x + y;
}
```

---

# メソッドの呼び出し

メソッドは、次のように呼び出します。

```java
メソッド名(引数リスト);
```

## 具体例

```java
class Main {
    public static void main(String[] args) {
        int sum = add(10, 20);
        System.out.println(sum); // 30
    }
    
    public static int add(int x, int y) {
        return x + y;
    }
}
```

---

# 既存のメソッドの利用

Java には、標準ライブラリに含まれる多くのメソッドが用意されています。

今回は紹介に、`String` クラスに含まれるメソッドを利用します。

```java
String str = "Hello, World!";
int length = str.length(); //文字列の長さを取得するメソッド

System.out.println(length); // 13

str = str.toUpperCase(); //文字列を大文字に変換するメソッド
System.out.println(str); // HELLO, WORLD!
```

