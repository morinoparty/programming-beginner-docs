# 配列とリスト

Java には、配列とリストという 2 つのデータ構造があります。配列は固定長で、リストは可変長です。

## 配列

配列は、同じ型の要素を連続したメモリ領域に格納するデータ構造です。配列は、要素のインデックスを指定することで、要素にアクセスすることができます。

配列を宣言するには、型名に続けて角括弧 `[]` を指定します。配列の要素数を指定するには、`new` 演算子を使って配列を生成します。

```java
int[] array = new int[5];
```

配列の要素にアクセスするには、インデックスを指定します。インデックスは 0 から始まります。

```java
int[] array = new int[5];
array[0] = 10;
array[1] = 20;
array[2] = 30;
array[3] = 40;
array[4] = 50;
```

配列の要素数を取得するには、`length` プロパティを使います。

```java
int[] array = new int[5];
System.out.println(array.length); // 5
```

## リスト

リストは、要素を順序付けて格納するデータ構造です。リストは、要素の追加や削除が可能です。

リストを宣言するには、`List` インターフェースを実装したクラスを使います。`ArrayList` クラスは、リストを実装したクラスの一つです。

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

リストの要素にアクセスするには、インデックスを指定します

```java
List<Integer> list = new ArrayList<>();
list.add(10);
list.add(20);
list.add(30);

System.out.println(list.get(0)); // 10
System.out.println(list.get(1)); // 20
```

リストの要素数を取得するには、`size` メソッドを使います。

```java
List<Integer> list = new ArrayList<>();
list.add(10);
list.add(20);
list.add(30);

System.out.println(list.size()); // 3
```

リストの要素を削除するには、`remove` メソッドを使います。

```java
List<Integer> list = new ArrayList<>();
list.add(10);
list.add(20);
list.add(30);


System.out.println(list); // [10, 20, 30]
list.remove(0);
System.out.println(list); // [20, 30]
```

リストの要素を更新するには、`set` メソッドを使います。

```java
List<Integer> list = new ArrayList<>();
list.add(10);
list.add(20);
list.add(30);

System.out.println(list); // [10, 20, 30]
list.set(1, 50);
System.out.println(list); // [10, 50, 30]
```

リストの要素を検索するには、`indexOf` メソッドを使います。

```java
List<Integer> list = new ArrayList<>();
list.add(10);
list.add(20);
list.add(30);

System.out.println(list.indexOf(20)); // 1
```












