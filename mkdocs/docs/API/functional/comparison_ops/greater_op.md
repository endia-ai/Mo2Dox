



# greater_op
  
[Source Code](https://github.com/endia-ai/Endia/tree/main/endia/functional/comparison_ops/greater_op.mojo)  
  

## Greater
  
  
  

### Parent Traits
  

- AnyType
- ComparisonOp
- UnknownDestructibility
  

### Functions

#### fwd


```swift
fwd(arg0: Array, arg1: Array) -> Array
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Show more details.  
</summary>  
  
#### Args:  

* arg0 `Array`
* arg1 `Array`
  
#### Returns:  
  
Type: `Array`  
  
  
</details>
#### comparing_simd_op


```swift
comparing_simd_op(arg0_real: SIMD[float32, nelts[::DType]().__mul__(2).__floordiv__(2)], arg1_real: SIMD[float32, nelts[::DType]().__mul__(2).__floordiv__(2)], arg0_imag: SIMD[float32, nelts[::DType]().__mul__(2).__floordiv__(2)], arg1_imag: SIMD[float32, nelts[::DType]().__mul__(2).__floordiv__(2)]) -> Tuple[SIMD[float32, nelts[::DType]().__mul__(2).__floordiv__(2)], SIMD[float32, nelts[::DType]().__mul__(2).__floordiv__(2)]]
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Show more details.  
</summary>  
  
#### Args:  

* arg0_real `SIMD[float32, nelts[::DType]().__mul__(2).__floordiv__(2)]`
* arg1_real `SIMD[float32, nelts[::DType]().__mul__(2).__floordiv__(2)]`
* arg0_imag `SIMD[float32, nelts[::DType]().__mul__(2).__floordiv__(2)]`
* arg1_imag `SIMD[float32, nelts[::DType]().__mul__(2).__floordiv__(2)]`
  
#### Returns:  
  
Type: `Tuple[SIMD[float32, nelts[::DType]().__mul__(2).__floordiv__(2)], SIMD[float32, nelts[::DType]().__mul__(2).__floordiv__(2)]]`  
  
  
</details>
#### __call__


```swift
__call__(mut curr: Array, args: List[Array])
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Show more details.  
</summary>  
  
#### Args:  

* curr `Array`
* args `List[Array]`
  
  
</details>
## greater


```swift
greater(arg0: Array, arg1: Array) -> Array
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Show more details.  
</summary>  
  
#### Args:  

* arg0 `Array`
* arg1 `Array`
  
#### Returns:  
  
Type: `Array`  
  
  
</details>