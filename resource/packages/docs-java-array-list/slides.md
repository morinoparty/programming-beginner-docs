---
theme: ../theme-modern
download: true
---

# 配列とリスト

---

# 目次

<Toc maxDepth="1"></Toc>

---

# 配列

配列は、同じ型の要素を複数格納するデータ構造です。配列は、要素数を指定して宣言します。

```java
int[] array = new int[3];
```

配列の要素にアクセスするには、インデックスを指定します。

```java
int[] array = new int[3];
array[0] = 10;
array[1] = 20;
array[2] = 30;

System.out.println(array[0]); // 10
```

---

# リスト

リストは、要素を順序付けて格納するデータ構造です。リストは、要素の追加や削除が可能です。

```java
List<Integer> list = new ArrayList<>();
```

リストに要素を追加するには、`add` メソッドを使います。

```java
List<Integer> list = new ArrayList<>();
list.add(10);
list.add(20);
list.add(30);
```

リストの要素にアクセスするには、インデックスを指定します。

```java
List<Integer> list = new ArrayList<>();
list.add(10);
list.add(20);
list.add(30);

System.out.println(list.get(0)); // 10
```
