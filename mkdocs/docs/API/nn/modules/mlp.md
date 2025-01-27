



# mlp
  
[Source Code](https://github.com/endia-ai/Endia/tree/main/endia/nn/modules/mlp.mojo)  
  

## MLP
  
  
  

### Parent Traits
  

- AnyType
- StringableRaising
- UnknownDestructibility

### Fields
  
  
* weights `List[Array]`  
* biases `List[Array]`  
* hidden_dims `List[Int]`  
* num_layers `Int`  
* compute_backward `Bool`  

### Functions

#### __init__


```swift
__init__(out self, hidden_dims: List[Int], compute_backward: Bool = False)
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Show more details.  
</summary>  
  
#### Args:  

* self `Self`
* hidden_dims `List[Int]`
* compute_backward `Bool` Default: False
  
  
</details>
#### forward


```swift
forward(self, x: Array) -> Array
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Show more details.  
</summary>  
  
#### Args:  

* self `Self`
* x `Array`
  
#### Returns:  
  
Type: `Array`  
  
  
</details>
#### params


```swift
params(self) -> List[Array]
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
## mlp


```swift
mlp(args: List[Array]) -> Array
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Show more details.  
</summary>  
  
#### Args:  

* args `List[Array]`
  
#### Returns:  
  
Type: `Array`  
  
  
</details>