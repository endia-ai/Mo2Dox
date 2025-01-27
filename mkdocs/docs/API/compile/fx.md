



# fx
  
[Source Code](https://github.com/endia-ai/Endia/tree/main/endia/compile/fx.mojo)  
  

## FxSubgraph
  
  
FxSubgraph represents a functionally pure subgraph within a larger computation graph. It facilitates optimization and efficient execution of subgraphs by caching and reusing optimized computations.  

### Parent Traits
  

- AnyType
- CollectionElement
- Copyable
- Movable
- UnknownDestructibility

### Fields
  
  
* traversing_arrays `List[Array]`  
* inputs `List[Array]`  
* outputs `List[Array]`  
* max_model `List[ArcPointer[Model]]`  
* compile_with_MAX `Bool`  

### Functions

#### __init__


```swift
__init__(out self, compile_with_MAX: Bool, traversing_arrays: List[Array] = List())
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Show more details.  
</summary>  
  
#### Args:  

* self `Self`
* compile_with_MAX `Bool`
* traversing_arrays `List[Array]` Default: List()
  
  
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
#### append


```swift
append(mut self, arr: Array)
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Show more details.  
</summary>  
  
#### Args:  

* self `Self`
* arr `Array`
  
  
</details>
#### setup_inputs_and_outputs


```swift
setup_inputs_and_outputs(mut self)
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Show more details.  
</summary>  
  
#### Args:  

* self `Self`
  
  
</details>
#### execute


```swift
execute(mut self)
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Show more details.  
</summary>  
  
#### Args:  

* self `Self`
  
  
</details>
#### print


```swift
print(self)
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Print the subgraph in a human readable table like format. It will show the flow of the computation from the top to the bottom, and also will show the direct dependencies (args) and other metadata such as the shape, stride, storage_offset and the requires_grad flag.  
</summary>  
  
#### Args:  

* self `Self`
  
  
</details>
#### IR


```swift
IR(self) -> String
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Get an IR like code representation of the subgraph. As of right perf_counter this has perf_counter real functionality, but eventually this IR string should become a valid MLIR code representation of the subgraph, which can be compiled and optimized by the MLIR.  
</summary>  
  
#### Args:  

* self `Self`
  
#### Returns:  
  
Type: `String`  
  
  
</details>
## FxGraphNode
  
  
FxGraphNode is a lightweight dual representation of an Array (or Node) within a traced function. It serves as a bookkeeping structure to facilitate tracing, caching, and optimization of computation graphs.  

### Parent Traits
  

- AnyType
- CollectionElement
- Copyable
- Movable
- UnknownDestructibility

### Fields
  
  
* array_in_graph `Array`  
* name `String`  
* branch_to_idx `Int`  
* is_breakpoint `Bool`  
* dependencies `Int`  
* sub_graph `List[ArcPointer[FxSubgraph]]`  
* tmp_id_in_subgraph `Int`  
* jvp_derivatives `List[Array]`  
* is_computed `Bool`  
* id `Int`  

### Functions

#### __init__


```swift
__init__(out self, name: String, branch_to_idx: Int, array_in_graph: Array)
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Show more details.  
</summary>  
  
#### Args:  

* self `Self`
* name `String`
* branch_to_idx `Int`
* array_in_graph `Array`
  
  
</details>
#### print


```swift
print(self, storage_offset: String = String(""))
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Show more details.  
</summary>  
  
#### Args:  

* self `Self`
* storage_offset `String` Default: String("")
  
  
</details>
#### subgraph


```swift
subgraph(self) -> FxSubgraph
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Show more details.  
</summary>  
  
#### Args:  

* self `Self`
  
#### Returns:  
  
Type: `FxSubgraph`  
  
  
</details>
## FxGraph
  
  
FxGraph is a data structure that holds the traced operations and computation graph of a function. It facilitates Just-In-Time (JIT) compilation, optimization, and caching of subgraphs within the computation graph.  

### Parent Traits
  

- AnyType
- Copyable
- Movable
- UnknownDestructibility

### Fields
  
  
* trace `List[FxGraphNode]`  
* curr_idx `Int`  
* postponed_outputs `List[Int]`  
* compile_with_MAX `Bool`  

### Functions

#### __init__


```swift
__init__(out self, compile_with_MAX: Bool)
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Show more details.  
</summary>  
  
#### Args:  

* self `Self`
* compile_with_MAX `Bool`
  
  
</details>
#### op_array


```swift
op_array(mut self, mut arr: Array)
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Show more details.  
</summary>  
  
#### Args:  

* self `Self`
* arr `Array`
  
  
</details>
#### reset_data_and_shapes_to_uncomputed


```swift
reset_data_and_shapes_to_uncomputed(mut self)
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Show more details.  
</summary>  
  
#### Args:  

* self `Self`
  
  
</details>
#### setup_grads


```swift
setup_grads(mut self)
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Show more details.  
</summary>  
  
#### Args:  

* self `Self`
  
  
</details>
#### zero_data


```swift
zero_data(mut self)
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Show more details.  
</summary>  
  
#### Args:  

* self `Self`
  
  
</details>
#### subgraph


```swift
subgraph(mut self, compile_with_MAX: Bool) -> ArcPointer[FxSubgraph]
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Show more details.  
</summary>  
  
#### Args:  

* self `Self`
* compile_with_MAX `Bool`
  
#### Returns:  
  
Type: `ArcPointer[FxSubgraph]`  
  
  
</details>
## top_order_subgraph_rec


```swift
top_order_subgraph_rec(mut curr: Array, mut trace: List[Array])
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Show more details.  
</summary>  
  
#### Args:  

* curr `Array`
* trace `List[Array]`
  
  
</details>