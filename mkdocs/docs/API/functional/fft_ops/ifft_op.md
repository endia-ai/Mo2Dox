



# ifft_op
  
[Source Code](https://github.com/endia-ai/Endia/tree/main/endia/functional/fft_ops/ifft_op.mojo)  
  

## ifft


```swift
ifft(x: Array, dim: Int = -1, norm: String = String("backward")) -> Array
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Compute the n-dimensional inverse FFT.  
</summary>  
  
#### Args:  

* x `Array`: The input array.
* dim `Int`: The dimension along which to compute the inverse FFT. Default: -1
* norm `String`: The normalization mode. Default: String("backward")
  
#### Returns:  
  
The n-dimensional inverse FFT of the input array.  
Type: `Array`  
  
  
</details>