



# node
  
[Source Code](https://github.com/endia-ai/Endia/tree/main/endia/array_and_node/node.mojo)  
  

## Node
  
  
Node is the central data structure representing an array in the autograd engine. It is responsible for encapsulating all the necessary information and metadata related to an array, including its shape, data, operations, gradients, and dependencies.  

### Parent Traits
  

- AnyType
- CollectionElement
- Copyable
- Movable
- UnknownDestructibility

### Fields
  
  
* id `Int`  
* name `String`  
* shape `ArcPointer[ShapeNode]`  
* data `UnsafePointer[SIMD[float32, 1]]`  
* is_view `Bool`  
* base `List[ArcPointer[Node]]`  
* args `List[ArcPointer[Node]]`  
* kwargs `List[ArcPointer[Node]]`  
* grads `List[ArcPointer[Node]]`  
* fwd `fn(mut Array, List[Array]) raises -> None`  
* uew `List[fn(SIMD[float32, nelts[::DType]().__mul__(2).__floordiv__(2)], SIMD[float32, nelts[::DType]().__mul__(2).__floordiv__(2)]) -> Tuple[SIMD[float32, nelts[::DType]().__mul__(2).__floordiv__(2)], SIMD[float32, nelts[::DType]().__mul__(2).__floordiv__(2)]]]`  
* bew `List[fn(SIMD[float32, nelts[::DType]().__mul__(2).__floordiv__(2)], SIMD[float32, nelts[::DType]().__mul__(2).__floordiv__(2)], SIMD[float32, nelts[::DType]().__mul__(2).__floordiv__(2)], SIMD[float32, nelts[::DType]().__mul__(2).__floordiv__(2)]) -> Tuple[SIMD[float32, nelts[::DType]().__mul__(2).__floordiv__(2)], SIMD[float32, nelts[::DType]().__mul__(2).__floordiv__(2)]]]`  
* simd_op_list `List[fn(SIMD[float32, nelts[::DType]().__mul__(2).__floordiv__(2)], SIMD[float32, nelts[::DType]().__mul__(2).__floordiv__(2)]) -> Tuple[SIMD[float32, nelts[::DType]().__mul__(2).__floordiv__(2)], SIMD[float32, nelts[::DType]().__mul__(2).__floordiv__(2)]]]`  
* inplace_infos `List[InplaceInfo]`  
* jvp `fn(List[Array], List[Array]) raises -> Array`  
* vjp `fn(List[Array], Array, Array) raises -> List[Array]`  
* requires_grad `Bool`  
* compute_jvp `Bool`  
* graph `Optional[ArcPointer[FxGraph]]`  
* id_in_graph `Optional[Int]`  
* has_real `Bool`  
* has_imag `Bool`  
* meta_data `ArcPointer[List[Int]]`  

### Functions

#### __init__


```swift
__init__(out self, array_shape: ArrayShape, requires_grad: Bool = False, is_complex: Bool = False, is_view: Bool = False)
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Show more details.  
</summary>  
  
#### Args:  

* self `Self`
* array_shape `ArrayShape`
* requires_grad `Bool` Default: False
* is_complex `Bool` Default: False
* is_view `Bool` Default: False
  
  
</details>
#### __del__


```swift
__del__(owned self)
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Show more details.  
</summary>  
  
#### Args:  

* self `Self`
  
  
</details>