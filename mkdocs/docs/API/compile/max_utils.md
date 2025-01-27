



# max_utils
  
[Source Code](https://github.com/endia-ai/Endia/tree/main/endia/compile/max_utils.mojo)  
  

## tensor_to_array


```swift
tensor_to_array(owned src: Tensor[float32]) -> Array
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Show more details.  
</summary>  
  
#### Args:  

* src `Tensor[float32]`
  
#### Returns:  
  
Type: `Array`  
  
  
</details>
## top_order


```swift
top_order(mut curr: Array) -> List[Array]
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Show more details.  
</summary>  
  
#### Args:  

* curr `Array`
  
#### Returns:  
  
Type: `List[Array]`  
  
  
</details>
## to_tensor


```swift
to_tensor(arg: Array) -> Tensor[float32]
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Show more details.  
</summary>  
  
#### Args:  

* arg `Array`
  
#### Returns:  
  
Type: `Tensor[float32]`  
  
  
</details>
## make_equal_rank


```swift
make_equal_rank(arg: Symbol, arg_shape: List[Int], comp_shape: List[Int]) -> Symbol
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Show more details.  
</summary>  
  
#### Args:  

* arg `Symbol`
* arg_shape `List[Int]`
* comp_shape `List[Int]`
  
#### Returns:  
  
Type: `Symbol`  
  
  
</details>
## build_graph


```swift
build_graph(args: List[Array], outputs: List[Array], trace: List[Array]) -> Graph
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Show more details.  
</summary>  
  
#### Args:  

* args `List[Array]`
* outputs `List[Array]`
* trace `List[Array]`
  
#### Returns:  
  
Type: `Graph`  
  
  
</details>
## build_model


```swift
build_model(args: List[Array], outputs: List[Array], trace: List[Array]) -> Model
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Show more details.  
</summary>  
  
#### Args:  

* args `List[Array]`
* outputs `List[Array]`
* trace `List[Array]`
  
#### Returns:  
  
Type: `Model`  
  
  
</details>
## execute_model


```swift
execute_model(args: List[Array], outputs: List[Array], model: Model) -> List[Array]
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Execution of a model with MAX JIT compilation. No data copying, only temporary pointer borrowing for inputs and ownership stealing for outputs.  
</summary>  
  
#### Args:  

* args `List[Array]`
* outputs `List[Array]`
* model `Model`
  
#### Returns:  
  
Type: `List[Array]`  
  
  
</details>