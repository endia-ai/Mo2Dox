



# array_conversions
  
[Source Code](https://github.com/endia-ai/Endia/tree/main/endia/utils/array_conversions.mojo)  
  

## to_torch


```swift
to_torch(arg: Array) -> PythonObject
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Converts an endia Array to a torch tensor.  
</summary>  
  
#### Args:  

* arg `Array`
  
#### Returns:  
  
Type: `PythonObject`  
  
  
</details>
## to_torch_tensor


```swift
to_torch_tensor(arg: Array) -> PythonObject
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Show more details.  
</summary>  
  
#### Args:  

* arg `Array`
  
#### Returns:  
  
Type: `PythonObject`  
  
  
</details>
## is_close


```swift
is_close(x: Array, x_torch: PythonObject, rtol: SIMD[float32, 1] = SIMD(#kgen.float_literal<1|10000>)) -> Bool
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Checks if the values in the endia Array and the torch tensor are equal up to a relative tolerance.  
</summary>  
  
#### Args:  

* x `Array`
* x_torch `PythonObject`
* rtol `SIMD[float32, 1]` Default: SIMD(#kgen.float_literal<1|10000>)
  
#### Returns:  
  
Type: `Bool`  
  
  
</details>