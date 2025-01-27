



# sgd
  
[Source Code](https://github.com/endia-ai/Endia/tree/main/endia/optim/sgd.mojo)  
  

## SGD
  
  
  

### Parent Traits
  

- AnyType
- UnknownDestructibility

### Fields
  
  
* params `List[Array]`  
* lr `SIMD[float32, 1]`  
* momentum `SIMD[float32, 1]`  
* weight_decay `SIMD[float32, 1]`  
* velocity `List[Array]`  

### Functions

#### __init__


```swift
__init__(out self, params: List[Array], lr: SIMD[float32, 1] = SIMD(#kgen.float_literal<1|100>), momentum: SIMD[float32, 1] = SIMD(0), weight_decay: SIMD[float32, 1] = SIMD(0))
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Show more details.  
</summary>  
  
#### Args:  

* self `Self`
* params `List[Array]`
* lr `SIMD[float32, 1]` Default: SIMD(#kgen.float_literal<1|100>)
* momentum `SIMD[float32, 1]` Default: SIMD(0)
* weight_decay `SIMD[float32, 1]` Default: SIMD(0)
  
  
</details>
#### step


```swift
step(mut self)
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Show more details.  
</summary>  
  
#### Args:  

* self `Self`
  
  
</details>