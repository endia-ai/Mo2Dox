



# adam
  
[Source Code](https://github.com/endia-ai/Endia/tree/main/endia/optim/adam.mojo)  
  

## Adam
  
  
  

### Parent Traits
  

- AnyType
- UnknownDestructibility

### Fields
  
  
* params `List[Array]`  
* lr `SIMD[float32, 1]`  
* beta1 `SIMD[float32, 1]`  
* beta2 `SIMD[float32, 1]`  
* eps `SIMD[float32, 1]`  
* t `SIMD[float32, 1]`  
* m `List[Array]`  
* v `List[Array]`  

### Functions

#### __init__


```swift
__init__(out self, params: List[Array], lr: SIMD[float32, 1] = SIMD(#kgen.float_literal<1|1000>), beta1: SIMD[float32, 1] = SIMD(#kgen.float_literal<9|10>), beta2: SIMD[float32, 1] = SIMD(#kgen.float_literal<999|1000>), eps: SIMD[float32, 1] = SIMD(#kgen.float_literal<1|100000000>))
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Show more details.  
</summary>  
  
#### Args:  

* self `Self`
* params `List[Array]`
* lr `SIMD[float32, 1]` Default: SIMD(#kgen.float_literal<1|1000>)
* beta1 `SIMD[float32, 1]` Default: SIMD(#kgen.float_literal<9|10>)
* beta2 `SIMD[float32, 1]` Default: SIMD(#kgen.float_literal<999|1000>)
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