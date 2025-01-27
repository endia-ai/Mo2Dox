



# callable
  
[Source Code](https://github.com/endia-ai/Endia/tree/main/endia/compile/callable.mojo)  
  

## Callable
  
  
Callable is the main data structure for Just-In-Time (JIT) compiling a function and computing gradients in a functional manner. It encapsulates the function, its arguments, and the captured computation graph, enabling dynamic optimization and execution.  

### Parent Traits
  

- AnyType
- CollectionElement
- Copyable
- Movable
- UnknownDestructibility

### Fields
  
  
* args `ArcPointer[List[Array]]`  
* argnums `List[List[Int]]`  
* func `Variant[fn(List[Array]) raises -> Array, fn(Array) raises -> Array]`  
* captured_graph `ArcPointer[FxGraph]`  
* order_of_differentiation `Int`  
* optimize_jit `Bool`  
* args_initialized `Bool`  
* keep_intermediate_outs `Bool`  

### Functions

#### __init__


```swift
__init__(out self, func: Variant[fn(List[Array]) raises -> Array, fn(Array) raises -> Array], argnums: List[List[Int]], order_of_differentiation: Int = 0, optimize_jit: Bool = True, keep_intermediate_outs: Bool = False, compile_with_MAX: Bool = False)
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Show more details.  
</summary>  
  
#### Args:  

* self `Self`
* func `Variant[fn(List[Array]) raises -> Array, fn(Array) raises -> Array]`
* argnums `List[List[Int]]`
* order_of_differentiation `Int` Default: 0
* optimize_jit `Bool` Default: True
* keep_intermediate_outs `Bool` Default: False
* compile_with_MAX `Bool` Default: False
  
  
</details>
#### __call__


```swift
__call__(self, args: List[Array]) -> Variant[Array, List[Array], List[List[Array]]]
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Show more details.  
</summary>  
  
#### Args:  

* self `Self`
* args `List[Array]`
  
#### Returns:  
  
Type: `Variant[Array, List[Array], List[List[Array]]]`  
  
  
</details>