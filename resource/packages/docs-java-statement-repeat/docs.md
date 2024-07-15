# 条件分岐と繰り返し

## 条件分岐

条件分岐は、条件によって処理を分岐させる制御構造です。条件分岐は、`if`文を使って記述します。

```java
boolean condition = true;

if (condition) {
    // 条件が true の場合に実行される処理
}
```

`if`文の後に続く条件式が `true` の場合に、中括弧 `{}` 内の処理が実行されます。

`if`文には、`else`節を追加することで、条件が `false` の場合に実行される処理を記述することができます。

```java
int x = 10;

if (x > 0) {
    System.out.println("x は正の数です");
} else {
    System.out.println("x は負の数です");
}
```

`if`文には、`else if`節を追加することで、複数の条件をチェックすることができます。

```java
int x = 10;

if (x > 0) {
    System.out.println("x は正の数です");
} else if (x < 0) {
    System.out.println("x は負の数です");
} else {
    System.out.println("x は 0 です");
}
```

## 繰り返し

繰り返しは、同じ処理を繰り返し実行する制御構造です。繰り返しは、`for`文や`while`文を使って記述します。

`for`文は、指定した回数だけ処理を繰り返す場合に使用します。

```java
for (int i = 0; i < 10; i++) {
    System.out.println(i);
}
```

`for`文の初期化式、条件式、更新式をセミコロン `;` で区切って指定します。

`while`文は、条件が `true` の間、処理を繰り返す場合に使用します。

```java
int i = 0;

while (i < 10) {
    System.out.println(i);
    i++;
}
```

`while`文の条件式が `false` になるまで、中括弧 `{}` 内の処理が繰り返し実行されます。

`do-while`文は、条件が `true` の間、処理を繰り返す場合に使用します。`do-while`文は、条件式のチェックを処理の後に行う点が`while`文と異なります。

```java
int i = 0;

do {
    System.out.println(i);
    i++;
} while (i < 10);
```

`do-while`文は、最低でも 1 回は処理が実行されるため、条件式が `false` の場合でも、最初の 1 回は処理が実行されます。

## 繰り返しの制御

繰り返しの処理を途中で終了したい場合には、`break`文を使います。

```java

for (int i = 0; i < 10; i++) {
    if (i == 5) {
        break;
    }
    System.out.println(i);
}
```

`break`文を使うことで、繰り返し処理を途中で終了することができます。

繰り返しの処理をスキップしたい場合には、`continue`文を使います。

```java

for (int i = 0; i < 10; i++) {
    if (i == 5) {
        continue;
        //この後の処理はスキップされるが、繰り返しは続く
    }
    System.out.println(i);
}
```

`continue`文を使うことで、繰り返し処理の中で、特定の条件の場合に処理をスキップすることができます。






