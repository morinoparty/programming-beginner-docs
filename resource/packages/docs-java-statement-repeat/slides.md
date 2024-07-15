---
theme: ../theme-modern
download: true
---

# 条件分岐と繰り返し

---

# 目次

<Toc maxDepth="1"></Toc>

---

# 条件分岐(`if`文)

条件分岐は、指定した条件によって処理を分岐する制御構造です。条件分岐は、`if`文や`switch`文を使って記述します。

`if`文は、指定した条件が `true` の場合、処理を実行します。

```java
int x = 10;

if (x > 0) {
    System.out.println("x は正の数です");
}
```

---

# さらなる条件分岐(`else`節、`else if`節)

`if`文には、`else`節を追加することで、指定した条件が `true` の場合、`if`節の処理を実行し、`false` の場合、`else`節の処理を実行します。

```java
int x = -10;

if (x > 0) {
    System.out.println("x は正の数です");
} else {
    System.out.println("x は負の数です");
}
```

`if`文には、`else if`節を追加することで、複数の条件をチェックすることができます。

```java
int x = 0;

if (x > 0) {
    System.out.println("x は正の数です");
} else if (x < 0) {
    System.out.println("x は負の数です");
} else {
    System.out.println("x は 0 です");
}
```

---

# さらなる条件分岐(`switch`文)

`switch`文は、指定した条件によって処理を分岐する制御構造です。`switch`文は、`case`節と`default`節を使って記述します。

`switch`文は、指定した条件に一致する`case`節の処理を実行します。

```java
int x = 1;

switch (x) {
    case 1:
        System.out.println("x は 1 です");
        break;
    case 2:
        System.out.println("x は 2 です");
        break;
    default:
        System.out.println("x は 1 でも 2 でもありません");
}
```

---

# 繰り返し(`for`文)

繰り返しは、同じ処理を繰り返し実行する制御構造です。繰り返しは、`for`文や`while`文を使って記述します。

`for`文は、指定した回数だけ処理を繰り返す場合に使用します。

```java
for (int i = 0; i < 10; i++) {
    System.out.println(i); // 0, 1, 2, ..., 9
}
```

---

# 繰り返し(`while`文)

`while`文は、条件が `true` の間、処理を繰り返す場合に使用します。

```java
int i = 0;

while (i < 10) {
    System.out.println(i); // 0, 1, 2, ..., 9
    i++;
}
```

`do-while`文は、条件が `true` の間、処理を繰り返す場合に使用します。`do-while`文は、条件式のチェックを処理の後に行う点が`while`文と異なります。

```java
int i = 0;

do {
    System.out.println(i); // 0, 1, 2, ..., 9
    i++;
} while (i < 10);
```

---

# 繰り返し(`break`文、`continue`文)

`break`文は、繰り返し処理を中断し、ループから抜け出す場合に使用します。

```java
for (int i = 0; i < 10; i++) {
    if (i == 5) {
        break;
    }
    System.out.println(i); // 0, 1, 2, 3, 4
}
```

`continue`文は、繰り返し処理を中断し、次の繰り返し処理に移る場合に使用します。

```java
for (int i = 0; i < 10; i++) {
    if (i == 5) {
        continue;
        // 5 は出力されない
    }
    System.out.println(i); // 0, 1, 2, 3, 4, 6, 7, 8, 9 
}
```

