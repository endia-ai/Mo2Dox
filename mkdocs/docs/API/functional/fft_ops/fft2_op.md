



# fft2_op
  
[Source Code](https://github.com/endia-ai/Endia/tree/main/endia/functional/fft_ops/fft2_op.mojo)  
  

## fft2


```swift
fft2(x: Array, dims: List[Int] = List(-2, -1), norm: String = String("backward")) -> Array
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Compute the 2-dimensional FFT.  
</summary>  
  
#### Args:  

* x `Array`: The input array.
* dims `List[Int]`: The dimensions along which to compute the FFT. Default: List(-2, -1)
* norm `String`: The normalization mode. Default: String("backward")
  
#### Returns:  
  
The 2-dimensional FFT of the input array.  
Type: `Array`  
  
  
</details>