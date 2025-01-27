



# array
  
[Source Code](https://github.com/endia-ai/Endia/tree/main/endia/array_and_node/array.mojo)  
  

## Array
  
  
Array is the primary data structure in the autograd engine. It serves as a wrapper around the Node struct, which encapsulates the array's data, shape, gradients, and other metadata.  

### Parent Traits
  

- AnyType
- CollectionElement
- Copyable
- Movable
- Stringable
- UnknownDestructibility
- Writable

### Fields
  
  
* node `ArcPointer[Node]`  

### Functions

#### __init__


```swift
__init__(out self, shape: List[Int], requires_grad: Bool = False, is_complex: Bool = False)
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Show more details.  
</summary>  
  
#### Args:  

* self `Self`
* shape `List[Int]`
* requires_grad `Bool` Default: False
* is_complex `Bool` Default: False
  
  
</details>

```swift
__init__(out self, array_shape: ArrayShape, is_view: Bool = False)
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Show more details.  
</summary>  
  
#### Args:  

* self `Self`
* array_shape `ArrayShape`
* is_view `Bool` Default: False
  
  
</details>

```swift
__init__(out self, node: ArcPointer[Node])
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Show more details.  
</summary>  
  
#### Args:  

* self `Self`
* node `ArcPointer[Node]`
  
  
</details>

```swift
__init__(out self, input_string: String, requires_grad: Bool = False)
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Show more details.  
</summary>  
  
#### Args:  

* self `Self`
* input_string `String`
* requires_grad `Bool` Default: False
  
  
</details>
#### __copyinit__


```swift
__copyinit__(out self, other: Self)
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Show more details.  
</summary>  
  
#### Args:  

* self `Self`
* other `Self`
  
  
</details>
#### __moveinit__


```swift
__moveinit__(out self, owned other: Self)
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Show more details.  
</summary>  
  
#### Args:  

* self `Self`
* other `Self`
  
  
</details>
#### __getitem__


```swift
__getitem__(self, *slices: Slice) -> Self
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Show more details.  
</summary>  
  
#### Args:  

* self `Self`
* \*slices `Slice`
  
#### Returns:  
  
Type: `Self`  
  
  
</details>
#### __setitem__


```swift
__setitem__(mut self, *slices: Slice, *, value: Variant[SIMD[float32, 1], Array])
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Show more details.  
</summary>  
  
#### Args:  

* self `Self`
* \*slices `Slice`
* value `Variant[SIMD[float32, 1], Array]`
  
  
</details>
#### __neg__


```swift
__neg__(self) -> Self
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Show more details.  
</summary>  
  
#### Args:  

* self `Self`
  
#### Returns:  
  
Type: `Self`  
  
  
</details>
#### __lt__


```swift
__lt__(self, other: Self) -> Bool
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Show more details.  
</summary>  
  
#### Args:  

* self `Self`
* other `Self`
  
#### Returns:  
  
Type: `Bool`  
  
  
</details>

```swift
__lt__(self, other: SIMD[float32, 1]) -> Bool
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Show more details.  
</summary>  
  
#### Args:  

* self `Self`
* other `SIMD[float32, 1]`
  
#### Returns:  
  
Type: `Bool`  
  
  
</details>
#### __le__


```swift
__le__(self, other: Self) -> Bool
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Show more details.  
</summary>  
  
#### Args:  

* self `Self`
* other `Self`
  
#### Returns:  
  
Type: `Bool`  
  
  
</details>

```swift
__le__(self, other: SIMD[float32, 1]) -> Bool
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Show more details.  
</summary>  
  
#### Args:  

* self `Self`
* other `SIMD[float32, 1]`
  
#### Returns:  
  
Type: `Bool`  
  
  
</details>
#### __eq__


```swift
__eq__(self, other: Self) -> Bool
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Show more details.  
</summary>  
  
#### Args:  

* self `Self`
* other `Self`
  
#### Returns:  
  
Type: `Bool`  
  
  
</details>

```swift
__eq__(self, other: SIMD[float32, 1]) -> Bool
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Show more details.  
</summary>  
  
#### Args:  

* self `Self`
* other `SIMD[float32, 1]`
  
#### Returns:  
  
Type: `Bool`  
  
  
</details>
#### __ne__


```swift
__ne__(self, other: Self) -> Bool
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Show more details.  
</summary>  
  
#### Args:  

* self `Self`
* other `Self`
  
#### Returns:  
  
Type: `Bool`  
  
  
</details>

```swift
__ne__(self, other: SIMD[float32, 1]) -> Bool
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Show more details.  
</summary>  
  
#### Args:  

* self `Self`
* other `SIMD[float32, 1]`
  
#### Returns:  
  
Type: `Bool`  
  
  
</details>
#### __gt__


```swift
__gt__(self, other: Self) -> Bool
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Show more details.  
</summary>  
  
#### Args:  

* self `Self`
* other `Self`
  
#### Returns:  
  
Type: `Bool`  
  
  
</details>

```swift
__gt__(self, other: SIMD[float32, 1]) -> Bool
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Show more details.  
</summary>  
  
#### Args:  

* self `Self`
* other `SIMD[float32, 1]`
  
#### Returns:  
  
Type: `Bool`  
  
  
</details>
#### __ge__


```swift
__ge__(self, other: Self) -> Bool
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Show more details.  
</summary>  
  
#### Args:  

* self `Self`
* other `Self`
  
#### Returns:  
  
Type: `Bool`  
  
  
</details>

```swift
__ge__(self, other: SIMD[float32, 1]) -> Bool
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Show more details.  
</summary>  
  
#### Args:  

* self `Self`
* other `SIMD[float32, 1]`
  
#### Returns:  
  
Type: `Bool`  
  
  
</details>
#### __add__


```swift
__add__(self, other: Self) -> Self
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Show more details.  
</summary>  
  
#### Args:  

* self `Self`
* other `Self`
  
#### Returns:  
  
Type: `Self`  
  
  
</details>

```swift
__add__(self, other: SIMD[float32, 1]) -> Self
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Show more details.  
</summary>  
  
#### Args:  

* self `Self`
* other `SIMD[float32, 1]`
  
#### Returns:  
  
Type: `Self`  
  
  
</details>
#### __sub__


```swift
__sub__(self, other: Self) -> Self
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Show more details.  
</summary>  
  
#### Args:  

* self `Self`
* other `Self`
  
#### Returns:  
  
Type: `Self`  
  
  
</details>

```swift
__sub__(self, other: SIMD[float32, 1]) -> Self
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Show more details.  
</summary>  
  
#### Args:  

* self `Self`
* other `SIMD[float32, 1]`
  
#### Returns:  
  
Type: `Self`  
  
  
</details>
#### __mul__


```swift
__mul__(self, other: Self) -> Self
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Show more details.  
</summary>  
  
#### Args:  

* self `Self`
* other `Self`
  
#### Returns:  
  
Type: `Self`  
  
  
</details>

```swift
__mul__(self, other: SIMD[float32, 1]) -> Self
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Show more details.  
</summary>  
  
#### Args:  

* self `Self`
* other `SIMD[float32, 1]`
  
#### Returns:  
  
Type: `Self`  
  
  
</details>
#### __matmul__


```swift
__matmul__(self, other: Self) -> Self
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Show more details.  
</summary>  
  
#### Args:  

* self `Self`
* other `Self`
  
#### Returns:  
  
Type: `Self`  
  
  
</details>
#### __truediv__


```swift
__truediv__(self, other: Self) -> Self
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Show more details.  
</summary>  
  
#### Args:  

* self `Self`
* other `Self`
  
#### Returns:  
  
Type: `Self`  
  
  
</details>

```swift
__truediv__(self, other: SIMD[float32, 1]) -> Self
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Show more details.  
</summary>  
  
#### Args:  

* self `Self`
* other `SIMD[float32, 1]`
  
#### Returns:  
  
Type: `Self`  
  
  
</details>
#### __pow__


```swift
__pow__(self, other: Self) -> Self
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Show more details.  
</summary>  
  
#### Args:  

* self `Self`
* other `Self`
  
#### Returns:  
  
Type: `Self`  
  
  
</details>

```swift
__pow__(self, other: SIMD[float32, 1]) -> Self
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Show more details.  
</summary>  
  
#### Args:  

* self `Self`
* other `SIMD[float32, 1]`
  
#### Returns:  
  
Type: `Self`  
  
  
</details>
#### __radd__


```swift
__radd__(self, other: Self) -> Self
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Show more details.  
</summary>  
  
#### Args:  

* self `Self`
* other `Self`
  
#### Returns:  
  
Type: `Self`  
  
  
</details>

```swift
__radd__(self, other: SIMD[float32, 1]) -> Self
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Show more details.  
</summary>  
  
#### Args:  

* self `Self`
* other `SIMD[float32, 1]`
  
#### Returns:  
  
Type: `Self`  
  
  
</details>
#### __rsub__


```swift
__rsub__(self, other: Self) -> Self
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Show more details.  
</summary>  
  
#### Args:  

* self `Self`
* other `Self`
  
#### Returns:  
  
Type: `Self`  
  
  
</details>

```swift
__rsub__(self, other: SIMD[float32, 1]) -> Self
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Show more details.  
</summary>  
  
#### Args:  

* self `Self`
* other `SIMD[float32, 1]`
  
#### Returns:  
  
Type: `Self`  
  
  
</details>
#### __rmul__


```swift
__rmul__(self, other: Self) -> Self
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Show more details.  
</summary>  
  
#### Args:  

* self `Self`
* other `Self`
  
#### Returns:  
  
Type: `Self`  
  
  
</details>

```swift
__rmul__(self, other: SIMD[float32, 1]) -> Self
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Show more details.  
</summary>  
  
#### Args:  

* self `Self`
* other `SIMD[float32, 1]`
  
#### Returns:  
  
Type: `Self`  
  
  
</details>
#### __rmatmul__


```swift
__rmatmul__(self, other: Self) -> Self
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Show more details.  
</summary>  
  
#### Args:  

* self `Self`
* other `Self`
  
#### Returns:  
  
Type: `Self`  
  
  
</details>
#### __rtruediv__


```swift
__rtruediv__(self, other: Self) -> Self
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Show more details.  
</summary>  
  
#### Args:  

* self `Self`
* other `Self`
  
#### Returns:  
  
Type: `Self`  
  
  
</details>

```swift
__rtruediv__(self, other: SIMD[float32, 1]) -> Self
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Show more details.  
</summary>  
  
#### Args:  

* self `Self`
* other `SIMD[float32, 1]`
  
#### Returns:  
  
Type: `Self`  
  
  
</details>
#### __rpow__


```swift
__rpow__(self, other: Self) -> Self
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Show more details.  
</summary>  
  
#### Args:  

* self `Self`
* other `Self`
  
#### Returns:  
  
Type: `Self`  
  
  
</details>

```swift
__rpow__(self, other: SIMD[float32, 1]) -> Self
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Show more details.  
</summary>  
  
#### Args:  

* self `Self`
* other `SIMD[float32, 1]`
  
#### Returns:  
  
Type: `Self`  
  
  
</details>
#### __iadd__


```swift
__iadd__(mut self, other: Self)
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Show more details.  
</summary>  
  
#### Args:  

* self `Self`
* other `Self`
  
  
</details>

```swift
__iadd__(mut self, other: SIMD[float32, 1])
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Show more details.  
</summary>  
  
#### Args:  

* self `Self`
* other `SIMD[float32, 1]`
  
  
</details>
#### __isub__


```swift
__isub__(mut self, other: Self)
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Show more details.  
</summary>  
  
#### Args:  

* self `Self`
* other `Self`
  
  
</details>

```swift
__isub__(mut self, other: SIMD[float32, 1])
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Show more details.  
</summary>  
  
#### Args:  

* self `Self`
* other `SIMD[float32, 1]`
  
  
</details>
#### __imul__


```swift
__imul__(mut self, other: Self)
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Show more details.  
</summary>  
  
#### Args:  

* self `Self`
* other `Self`
  
  
</details>

```swift
__imul__(mut self, other: SIMD[float32, 1])
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Show more details.  
</summary>  
  
#### Args:  

* self `Self`
* other `SIMD[float32, 1]`
  
  
</details>
#### __itruediv__


```swift
__itruediv__(mut self, other: Self)
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Show more details.  
</summary>  
  
#### Args:  

* self `Self`
* other `Self`
  
  
</details>

```swift
__itruediv__(mut self, other: SIMD[float32, 1])
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Show more details.  
</summary>  
  
#### Args:  

* self `Self`
* other `SIMD[float32, 1]`
  
  
</details>
#### __ipow__


```swift
__ipow__(mut self, other: Self)
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Show more details.  
</summary>  
  
#### Args:  

* self `Self`
* other `Self`
  
  
</details>

```swift
__ipow__(mut self, other: SIMD[float32, 1])
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Show more details.  
</summary>  
  
#### Args:  

* self `Self`
* other `SIMD[float32, 1]`
  
  
</details>
#### id


```swift
id(self) -> Int
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Show more details.  
</summary>  
  
#### Args:  

* self `Self`
  
#### Returns:  
  
Type: `Int`  
  
  
</details>
#### id_


```swift
id_(mut self, id: Int)
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Show more details.  
</summary>  
  
#### Args:  

* self `Self`
* id `Int`
  
  
</details>
#### array_shape


```swift
array_shape(self) -> ArrayShape
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Show more details.  
</summary>  
  
#### Args:  

* self `Self`
  
#### Returns:  
  
Type: `ArrayShape`  
  
  
</details>
#### array_shape_


```swift
array_shape_(mut self, shape: ArrayShape)
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Show more details.  
</summary>  
  
#### Args:  

* self `Self`
* shape `ArrayShape`
  
  
</details>
#### is_computed


```swift
is_computed(self) -> Bool
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Show more details.  
</summary>  
  
#### Args:  

* self `Self`
  
#### Returns:  
  
Type: `Bool`  
  
  
</details>
#### is_computed_


```swift
is_computed_(mut self, is_computed: Bool)
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Show more details.  
</summary>  
  
#### Args:  

* self `Self`
* is_computed `Bool`
  
  
</details>
#### is_graph_node_computed


```swift
is_graph_node_computed(self) -> Bool
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Show more details.  
</summary>  
  
#### Args:  

* self `Self`
  
#### Returns:  
  
Type: `Bool`  
  
  
</details>
#### is_graph_node_computed_


```swift
is_graph_node_computed_(mut self, is_computed: Bool)
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Show more details.  
</summary>  
  
#### Args:  

* self `Self`
* is_computed `Bool`
  
  
</details>
#### postpone_as_grpah_output


```swift
postpone_as_grpah_output(mut self)
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Show more details.  
</summary>  
  
#### Args:  

* self `Self`
  
  
</details>
#### args


```swift
args(self) -> List[Array]
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Show more details.  
</summary>  
  
#### Args:  

* self `Self`
  
#### Returns:  
  
Type: `List[Array]`  
  
  
</details>
#### args_


```swift
args_(mut self, args: List[Array])
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Show more details.  
</summary>  
  
#### Args:  

* self `Self`
* args `List[Array]`
  
  
</details>
#### clear_args


```swift
clear_args(mut self)
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Show more details.  
</summary>  
  
#### Args:  

* self `Self`
  
  
</details>
#### remove_grad


```swift
remove_grad(mut self)
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Show more details.  
</summary>  
  
#### Args:  

* self `Self`
  
  
</details>
#### kwargs


```swift
kwargs(self) -> List[Array]
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Show more details.  
</summary>  
  
#### Args:  

* self `Self`
  
#### Returns:  
  
Type: `List[Array]`  
  
  
</details>
#### kwargs_


```swift
kwargs_(mut self, kwargs: List[Array])
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Show more details.  
</summary>  
  
#### Args:  

* self `Self`
* kwargs `List[Array]`
  
  
</details>
#### id_in_graph_


```swift
id_in_graph_(mut self, id_in_graph: Int)
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Show more details.  
</summary>  
  
#### Args:  

* self `Self`
* id_in_graph `Int`
  
  
</details>
#### id_in_graph


```swift
id_in_graph(self) -> Int
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Show more details.  
</summary>  
  
#### Args:  

* self `Self`
  
#### Returns:  
  
Type: `Int`  
  
  
</details>
#### graph


```swift
graph(self) -> ArcPointer[FxGraph]
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Show more details.  
</summary>  
  
#### Args:  

* self `Self`
  
#### Returns:  
  
Type: `ArcPointer[FxGraph]`  
  
  
</details>
#### data_


```swift
data_(mut self, owned data_ptr: UnsafePointer[SIMD[float32, 1]])
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Show more details.  
</summary>  
  
#### Args:  

* self `Self`
* data_ptr `UnsafePointer[SIMD[float32, 1]]`
  
  
</details>
#### graph_


```swift
graph_(mut self, graph: ArcPointer[FxGraph])
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Show more details.  
</summary>  
  
#### Args:  

* self `Self`
* graph `ArcPointer[FxGraph]`
  
  
</details>
#### has_fxgraph


```swift
has_fxgraph(self) -> Bool
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Show more details.  
</summary>  
  
#### Args:  

* self `Self`
  
#### Returns:  
  
Type: `Bool`  
  
  
</details>
#### is_breakpoint


```swift
is_breakpoint(self) -> Bool
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Show more details.  
</summary>  
  
#### Args:  

* self `Self`
  
#### Returns:  
  
Type: `Bool`  
  
  
</details>
#### is_breakpoint_


```swift
is_breakpoint_(mut self, is_breakpoint: Bool)
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Show more details.  
</summary>  
  
#### Args:  

* self `Self`
* is_breakpoint `Bool`
  
  
</details>
#### item


```swift
item(self, idx: Int) -> Self
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Show more details.  
</summary>  
  
#### Args:  

* self `Self`
* idx `Int`
  
#### Returns:  
  
Type: `Self`  
  
  
</details>
#### setup_array_shape


```swift
setup_array_shape(mut self, array_shape: ArrayShape)
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Show more details.  
</summary>  
  
#### Args:  

* self `Self`
* array_shape `ArrayShape`
  
  
</details>
#### uew


```swift
uew(self) -> List[fn(SIMD[float32, nelts[::DType]().__mul__(2).__floordiv__(2)], SIMD[float32, nelts[::DType]().__mul__(2).__floordiv__(2)]) -> Tuple[SIMD[float32, nelts[::DType]().__mul__(2).__floordiv__(2)], SIMD[float32, nelts[::DType]().__mul__(2).__floordiv__(2)]]]
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Show more details.  
</summary>  
  
#### Args:  

* self `Self`
  
#### Returns:  
  
Type: `List[fn(SIMD[float32, nelts[::DType]().__mul__(2).__floordiv__(2)], SIMD[float32, nelts[::DType]().__mul__(2).__floordiv__(2)]) -> Tuple[SIMD[float32, nelts[::DType]().__mul__(2).__floordiv__(2)], SIMD[float32, nelts[::DType]().__mul__(2).__floordiv__(2)]]]`  
  
  
</details>
#### bew


```swift
bew(self) -> List[fn(SIMD[float32, nelts[::DType]().__mul__(2).__floordiv__(2)], SIMD[float32, nelts[::DType]().__mul__(2).__floordiv__(2)], SIMD[float32, nelts[::DType]().__mul__(2).__floordiv__(2)], SIMD[float32, nelts[::DType]().__mul__(2).__floordiv__(2)]) -> Tuple[SIMD[float32, nelts[::DType]().__mul__(2).__floordiv__(2)], SIMD[float32, nelts[::DType]().__mul__(2).__floordiv__(2)]]]
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Show more details.  
</summary>  
  
#### Args:  

* self `Self`
  
#### Returns:  
  
Type: `List[fn(SIMD[float32, nelts[::DType]().__mul__(2).__floordiv__(2)], SIMD[float32, nelts[::DType]().__mul__(2).__floordiv__(2)], SIMD[float32, nelts[::DType]().__mul__(2).__floordiv__(2)], SIMD[float32, nelts[::DType]().__mul__(2).__floordiv__(2)]) -> Tuple[SIMD[float32, nelts[::DType]().__mul__(2).__floordiv__(2)], SIMD[float32, nelts[::DType]().__mul__(2).__floordiv__(2)]]]`  
  
  
</details>
#### inplace_infos


```swift
inplace_infos(self) -> List[InplaceInfo]
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Show more details.  
</summary>  
  
#### Args:  

* self `Self`
  
#### Returns:  
  
Type: `List[InplaceInfo]`  
  
  
</details>
#### append_arg


```swift
append_arg(mut self, arg: Self)
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Show more details.  
</summary>  
  
#### Args:  

* self `Self`
* arg `Self`
  
  
</details>
#### append_inplace_info


```swift
append_inplace_info(mut self, inplace_info: InplaceInfo)
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Show more details.  
</summary>  
  
#### Args:  

* self `Self`
* inplace_info `InplaceInfo`
  
  
</details>
#### append_uew


```swift
append_uew(mut self, uew: fn(SIMD[float32, nelts[::DType]().__mul__(2).__floordiv__(2)], SIMD[float32, nelts[::DType]().__mul__(2).__floordiv__(2)]) -> Tuple[SIMD[float32, nelts[::DType]().__mul__(2).__floordiv__(2)], SIMD[float32, nelts[::DType]().__mul__(2).__floordiv__(2)]])
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Show more details.  
</summary>  
  
#### Args:  

* self `Self`
* uew `fn(SIMD[float32, nelts[::DType]().__mul__(2).__floordiv__(2)], SIMD[float32, nelts[::DType]().__mul__(2).__floordiv__(2)]) -> Tuple[SIMD[float32, nelts[::DType]().__mul__(2).__floordiv__(2)], SIMD[float32, nelts[::DType]().__mul__(2).__floordiv__(2)]]`
  
  
</details>
#### append_bew


```swift
append_bew(mut self, bew: fn(SIMD[float32, nelts[::DType]().__mul__(2).__floordiv__(2)], SIMD[float32, nelts[::DType]().__mul__(2).__floordiv__(2)], SIMD[float32, nelts[::DType]().__mul__(2).__floordiv__(2)], SIMD[float32, nelts[::DType]().__mul__(2).__floordiv__(2)]) -> Tuple[SIMD[float32, nelts[::DType]().__mul__(2).__floordiv__(2)], SIMD[float32, nelts[::DType]().__mul__(2).__floordiv__(2)]])
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Show more details.  
</summary>  
  
#### Args:  

* self `Self`
* bew `fn(SIMD[float32, nelts[::DType]().__mul__(2).__floordiv__(2)], SIMD[float32, nelts[::DType]().__mul__(2).__floordiv__(2)], SIMD[float32, nelts[::DType]().__mul__(2).__floordiv__(2)], SIMD[float32, nelts[::DType]().__mul__(2).__floordiv__(2)]) -> Tuple[SIMD[float32, nelts[::DType]().__mul__(2).__floordiv__(2)], SIMD[float32, nelts[::DType]().__mul__(2).__floordiv__(2)]]`
  
  
</details>
#### shape


```swift
shape(self) -> List[Int]
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Show more details.  
</summary>  
  
#### Args:  

* self `Self`
  
#### Returns:  
  
Type: `List[Int]`  
  
  
</details>
#### shape_


```swift
shape_(mut self, shape: List[Int])
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Show more details.  
</summary>  
  
#### Args:  

* self `Self`
* shape `List[Int]`
  
  
</details>
#### stride_


```swift
stride_(mut self, stride: List[Int])
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Show more details.  
</summary>  
  
#### Args:  

* self `Self`
* stride `List[Int]`
  
  
</details>
#### stride


```swift
stride(self) -> List[Int]
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Show more details.  
</summary>  
  
#### Args:  

* self `Self`
  
#### Returns:  
  
Type: `List[Int]`  
  
  
</details>
#### storage_offset


```swift
storage_offset(self) -> Int
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Show more details.  
</summary>  
  
#### Args:  

* self `Self`
  
#### Returns:  
  
Type: `Int`  
  
  
</details>
#### storage_offset_


```swift
storage_offset_(mut self, storage_offset: Int)
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Show more details.  
</summary>  
  
#### Args:  

* self `Self`
* storage_offset `Int`
  
  
</details>
#### ndim


```swift
ndim(self) -> Int
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Show more details.  
</summary>  
  
#### Args:  

* self `Self`
  
#### Returns:  
  
Type: `Int`  
  
  
</details>
#### size


```swift
size(self) -> Int
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Show more details.  
</summary>  
  
#### Args:  

* self `Self`
  
#### Returns:  
  
Type: `Int`  
  
  
</details>
#### is_view


```swift
is_view(self) -> Bool
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Show more details.  
</summary>  
  
#### Args:  

* self `Self`
  
#### Returns:  
  
Type: `Bool`  
  
  
</details>
#### is_view_


```swift
is_view_(mut self, is_view: Bool)
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Show more details.  
</summary>  
  
#### Args:  

* self `Self`
* is_view `Bool`
  
  
</details>
#### base_


```swift
base_(mut self, base: Self)
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Show more details.  
</summary>  
  
#### Args:  

* self `Self`
* base `Self`
  
  
</details>
#### base


```swift
base(self) -> Self
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Show more details.  
</summary>  
  
#### Args:  

* self `Self`
  
#### Returns:  
  
Type: `Self`  
  
  
</details>
#### requires_grad


```swift
requires_grad(self) -> Bool
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Show more details.  
</summary>  
  
#### Args:  

* self `Self`
  
#### Returns:  
  
Type: `Bool`  
  
  
</details>
#### requires_grad_


```swift
requires_grad_(mut self, requires_grad: Bool)
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Show more details.  
</summary>  
  
#### Args:  

* self `Self`
* requires_grad `Bool`
  
  
</details>
#### meta_data


```swift
meta_data(self) -> List[Int]
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Show more details.  
</summary>  
  
#### Args:  

* self `Self`
  
#### Returns:  
  
Type: `List[Int]`  
  
  
</details>
#### meta_data_


```swift
meta_data_(mut self, meta_data: List[Int])
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Show more details.  
</summary>  
  
#### Args:  

* self `Self`
* meta_data `List[Int]`
  
  
</details>
#### has_real


```swift
has_real(self) -> Bool
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Show more details.  
</summary>  
  
#### Args:  

* self `Self`
  
#### Returns:  
  
Type: `Bool`  
  
  
</details>
#### has_real_


```swift
has_real_(mut self, has_real: Bool)
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Show more details.  
</summary>  
  
#### Args:  

* self `Self`
* has_real `Bool`
  
  
</details>
#### has_imag


```swift
has_imag(self) -> Bool
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Show more details.  
</summary>  
  
#### Args:  

* self `Self`
  
#### Returns:  
  
Type: `Bool`  
  
  
</details>
#### has_imag_


```swift
has_imag_(mut self, has_imag: Bool)
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Show more details.  
</summary>  
  
#### Args:  

* self `Self`
* has_imag `Bool`
  
  
</details>
#### is_complex


```swift
is_complex(self) -> Bool
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Show more details.  
</summary>  
  
#### Args:  

* self `Self`
  
#### Returns:  
  
Type: `Bool`  
  
  
</details>
#### is_complex_


```swift
is_complex_(mut self, is_complex: Bool)
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Show more details.  
</summary>  
  
#### Args:  

* self `Self`
* is_complex `Bool`
  
  
</details>
#### data


```swift
data(self) -> UnsafePointer[SIMD[float32, 1]]
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Show more details.  
</summary>  
  
#### Args:  

* self `Self`
  
#### Returns:  
  
Type: `UnsafePointer[SIMD[float32, 1]]`  
  
  
</details>
#### real_idx


```swift
real_idx(self, idx: Int) -> Int
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Show more details.  
</summary>  
  
#### Args:  

* self `Self`
* idx `Int`
  
#### Returns:  
  
Type: `Int`  
  
  
</details>
#### imag_idx


```swift
imag_idx(self, idx: Int) -> Int
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Show more details.  
</summary>  
  
#### Args:  

* self `Self`
* idx `Int`
  
#### Returns:  
  
Type: `Int`  
  
  
</details>
#### load


```swift
load[width: Int = 1](self, idx: Int) -> SIMD[float32, width]
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Show more details.  
</summary>  
  
Parameters:  

* width `Int` Default: `1`
  
#### Args:  

* self `Self`
* idx `Int`
  
#### Returns:  
  
Type: `SIMD[float32, width]`  
  
  
</details>
#### store


```swift
store[width: Int = 1](mut self, idx: Int, data: SIMD[float32, width])
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Show more details.  
</summary>  
  
Parameters:  

* width `Int` Default: `1`
  
#### Args:  

* self `Self`
* idx `Int`
* data `SIMD[float32, width]`
  
  
</details>
#### load_imag


```swift
load_imag[width: Int = 1](self, idx: Int) -> SIMD[float32, width]
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Show more details.  
</summary>  
  
Parameters:  

* width `Int` Default: `1`
  
#### Args:  

* self `Self`
* idx `Int`
  
#### Returns:  
  
Type: `SIMD[float32, width]`  
  
  
</details>
#### store_imag


```swift
store_imag[width: Int = 1](mut self, idx: Int, data: SIMD[float32, width])
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Show more details.  
</summary>  
  
Parameters:  

* width `Int` Default: `1`
  
#### Args:  

* self `Self`
* idx `Int`
* data `SIMD[float32, width]`
  
  
</details>
#### load_complex


```swift
load_complex[width: Int = 1](self, idx: Int) -> Tuple[SIMD[float32, 2.__mul__(width).__floordiv__(2)], SIMD[float32, 2.__mul__(width).__floordiv__(2)]]
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Show more details.  
</summary>  
  
Parameters:  

* width `Int` Default: `1`
  
#### Args:  

* self `Self`
* idx `Int`
  
#### Returns:  
  
Type: `Tuple[SIMD[float32, 2.__mul__(width).__floordiv__(2)], SIMD[float32, 2.__mul__(width).__floordiv__(2)]]`  
  
  
</details>
#### store_complex


```swift
store_complex[width: Int = 1](mut self, idx: Int, real: SIMD[float32, width], imag: SIMD[float32, width])
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Show more details.  
</summary>  
  
Parameters:  

* width `Int` Default: `1`
  
#### Args:  

* self `Self`
* idx `Int`
* real `SIMD[float32, width]`
* imag `SIMD[float32, width]`
  
  
</details>
#### compute_jvp


```swift
compute_jvp(self) -> Bool
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Show more details.  
</summary>  
  
#### Args:  

* self `Self`
  
#### Returns:  
  
Type: `Bool`  
  
  
</details>
#### set_compute_jvp


```swift
set_compute_jvp(mut self, compute_jvp: Bool)
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Show more details.  
</summary>  
  
#### Args:  

* self `Self`
* compute_jvp `Bool`
  
  
</details>
#### set_fwd


```swift
set_fwd(mut self, fwd: fn(mut Array, List[Array]) raises -> None)
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Show more details.  
</summary>  
  
#### Args:  

* self `Self`
* fwd `fn(mut Array, List[Array]) raises -> None`
  
  
</details>
#### fwd


```swift
fwd(self) -> fn(mut Array, List[Array]) raises -> None
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Show more details.  
</summary>  
  
#### Args:  

* self `Self`
  
#### Returns:  
  
Type: `fn(mut Array, List[Array]) raises -> None`  
  
  
</details>
#### jvp_


```swift
jvp_(mut self, jvp: fn(List[Array], List[Array]) raises -> Array)
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Show more details.  
</summary>  
  
#### Args:  

* self `Self`
* jvp `fn(List[Array], List[Array]) raises -> Array`
  
  
</details>
#### jvp


```swift
jvp(self) -> fn(List[Array], List[Array]) raises -> Array
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Show more details.  
</summary>  
  
#### Args:  

* self `Self`
  
#### Returns:  
  
Type: `fn(List[Array], List[Array]) raises -> Array`  
  
  
</details>
#### vjp_


```swift
vjp_(mut self, vjp: fn(List[Array], Array, Array) raises -> List[Array])
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Show more details.  
</summary>  
  
#### Args:  

* self `Self`
* vjp `fn(List[Array], Array, Array) raises -> List[Array]`
  
  
</details>
#### vjp


```swift
vjp(self) -> fn(List[Array], Array, Array) raises -> List[Array]
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Show more details.  
</summary>  
  
#### Args:  

* self `Self`
  
#### Returns:  
  
Type: `fn(List[Array], Array, Array) raises -> List[Array]`  
  
  
</details>
#### has_grad


```swift
has_grad(self) -> Bool
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Show more details.  
</summary>  
  
#### Args:  

* self `Self`
  
#### Returns:  
  
Type: `Bool`  
  
  
</details>
#### grad_


```swift
grad_(mut self, grad: Self)
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Show more details.  
</summary>  
  
#### Args:  

* self `Self`
* grad `Self`
  
  
</details>
#### grad


```swift
grad(self) -> Self
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Show more details.  
</summary>  
  
#### Args:  

* self `Self`
  
#### Returns:  
  
Type: `Self`  
  
  
</details>
#### set_name


```swift
set_name(mut self, name: String)
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Show more details.  
</summary>  
  
#### Args:  

* self `Self`
* name `String`
  
  
</details>
#### name


```swift
name(self) -> String
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Show more details.  
</summary>  
  
#### Args:  

* self `Self`
  
#### Returns:  
  
Type: `String`  
  
  
</details>
#### execute_fwd


```swift
execute_fwd(mut self)
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Show more details.  
</summary>  
  
#### Args:  

* self `Self`
  
  
</details>
#### __str__


```swift
__str__(self) -> String
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Show more details.  
</summary>  
  
#### Args:  

* self `Self`
  
#### Returns:  
  
Type: `String`  
  
  
</details>
#### write_to


```swift
write_to[W: Writer](self, mut writer: W)
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Show more details.  
</summary>  
  
Parameters:  

* W `Writer`
  
#### Args:  

* self `Self`
* writer `W`
  
  
</details>
#### execute_fwds


```swift
execute_fwds(mut self)
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Show more details.  
</summary>  
  
#### Args:  

* self `Self`
  
  
</details>
#### graph_dual


```swift
graph_dual(self) -> Self
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Show more details.  
</summary>  
  
#### Args:  

* self `Self`
  
#### Returns:  
  
Type: `Self`  
  
  
</details>
#### backward


```swift
backward(self, create_graph: Bool = False)
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Show more details.  
</summary>  
  
#### Args:  

* self `Self`
* create_graph `Bool` Default: False
  
  
</details>
#### zero_grad


```swift
zero_grad(mut self)
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Show more details.  
</summary>  
  
#### Args:  

* self `Self`
  
  
</details>
#### T


```swift
T(self) -> Self
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Show more details.  
</summary>  
  
#### Args:  

* self `Self`
  
#### Returns:  
  
Type: `Self`  
  
  
</details>
#### reshape


```swift
reshape(self, shape: List[Int]) -> Self
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Show more details.  
</summary>  
  
#### Args:  

* self `Self`
* shape `List[Int]`
  
#### Returns:  
  
Type: `Self`  
  
  
</details>
## default_fwd


```swift
default_fwd(mut curr: Array, args: List[Array])
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Show more details.  
</summary>  
  
#### Args:  

* curr `Array`
* args `List[Array]`
  
  
</details>
## default_vjp


```swift
default_vjp(primals: List[Array], grad: Array, out: Array) -> List[Array]
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Show more details.  
</summary>  
  
#### Args:  

* primals `List[Array]`
* grad `Array`
* out `Array`
  
#### Returns:  
  
Type: `List[Array]`  
  
  
</details>
## default_jvp


```swift
default_jvp(primals: List[Array], tangents: List[Array]) -> Array
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Show more details.  
</summary>  
  
#### Args:  

* primals `List[Array]`
* tangents `List[Array]`
  
#### Returns:  
  
Type: `Array`  
  
  
</details>