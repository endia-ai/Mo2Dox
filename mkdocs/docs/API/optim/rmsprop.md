



# rmsprop
  
[Source Code](https://github.com/endia-ai/Endia/tree/main/endia/optim/rmsprop.mojo)  
  

## RMSprop
  
  
  

### Parent Traits
  

- AnyType
- UnknownDestructibility

### Fields
  
  
* params `List[Array]`  
* lr `SIMD[float32, 1]`  
* alpha `SIMD[float32, 1]`  
* eps `SIMD[float32, 1]`  
* cache `List[Array]`  

### Functions

#### __init__


```swift
__init__(out self, params: List[Array], lr: SIMD[float32, 1] = SIMD(#kgen.float_literal<1|100>), alpha: SIMD[float32, 1] = SIMD(#kgen.float_literal<99|100>), eps: SIMD[float32, 1] = SIMD(#kgen.float_literal<1|100000000>))
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Show more details.  
</summary>  
  
#### Args:  

* self `Self`
* params `List[Array]`
* lr `SIMD[float32, 1]` Default: SIMD(#kgen.float_literal<1|100>)
* alpha `SIMD[float32, 1]` Default: SIMD(#kgen.float_literal<99|100>)
* eps `SIMD[float32, 1]` Default: SIMD(#kgen.float_literal<1|100000000>)
  
  
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