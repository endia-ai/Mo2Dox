



# fft_op
  
[Source Code](https://github.com/endia-ai/Endia/tree/main/endia/functional/fft_ops/fft_op.mojo)  
  

## fft


```swift
fft(x: Array, dim: Int = -1, norm: String = String("backward")) -> Array
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Compute the n-dimensional FFT.  
</summary>  
  
#### Args:  

* x `Array`: The input array.
* dim `Int`: The dimension along which to compute the FFT. Default: -1
* norm `String`: The normalization mode. Default: String("backward")
  
#### Returns:  
  
The n-dimensional FFT of the input array.  
Type: `Array`  
  
  
</details>