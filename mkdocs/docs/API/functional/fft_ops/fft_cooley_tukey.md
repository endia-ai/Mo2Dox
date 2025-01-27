



# fft_cooley_tukey
  
[Source Code](https://github.com/endia-ai/Endia/tree/main/endia/functional/fft_ops/fft_cooley_tukey.mojo)  
  

## cooley_tukey_non_recursive


```swift
cooley_tukey_non_recursive(n: Int, max_depth: Int, res_data: UnsafePointer[SIMD[float64, 1]])
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Non-recursive Cooley-Tukey FFT splitting of the input data with a limited depth.  
</summary>  
  
#### Args:  

* n `Int`
* max_depth `Int`
* res_data `UnsafePointer[SIMD[float64, 1]]`
  
  
</details>
## cooley_tukey_sequencial_recombine


```swift
cooley_tukey_sequencial_recombine(n: Int, start_depth: Int, res_data: UnsafePointer[SIMD[float64, 1]])
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Non-recursive Cooley-Tukey FFT recombination of the subsolutions. The recombination starts at a given depth.  
</summary>  
  
#### Args:  

* n `Int`
* start_depth `Int`
* res_data `UnsafePointer[SIMD[float64, 1]]`
  
  
</details>
## fft_cooley_tukey_inplace_bit_reversal


```swift
fft_cooley_tukey_inplace_bit_reversal(workload: Int, data: UnsafePointer[SIMD[float64, 1]], reordered_arr_data: UnsafePointer[SIMD[uint32, 1]], dims: List[Int] = List())
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Iterative fast Fourier transform using the Cooley-Tukey algorithm with bit-reversal permutation inplace.  
</summary>  
  
#### Args:  

* workload `Int`
* data `UnsafePointer[SIMD[float64, 1]]`
* reordered_arr_data `UnsafePointer[SIMD[uint32, 1]]`
* dims `List[Int]` Default: List()
  
  
</details>
## fft_cooley_tukey_parallel


```swift
fft_cooley_tukey_parallel(input: Array, dims: List[Int], norm: String, out: Optional[Array] = Optional(None), conj_input: Bool = False, conj_output: Bool = False, input_divisor: SIMD[float64, 1] = SIMD(#kgen.float_literal<1|1>), output_divisor: SIMD[float32, 1] = SIMD(#kgen.float_literal<1|1>)) -> Array
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Compute the n-dimensional FFT using a hybrid version of the Cooley-Tukey algorithm.  
</summary>  
  
#### Args:  

* input `Array`: The input array.
* dims `List[Int]`: The dimensions along which to compute the FFT.
* norm `String`: The normalization mode.
* out `Optional[Array]`: The output array (optional). Default: Optional(None)
* conj_input `Bool`: Whether to conjugate the input data. Default: False
* conj_output `Bool`: Whether to conjugate the output data. Default: False
* input_divisor `SIMD[float64, 1]`: The divisor for the input data. Default: SIMD(#kgen.float_literal<1|1>)
* output_divisor `SIMD[float32, 1]`: The divisor for the output data. Default: SIMD(#kgen.float_literal<1|1>)
  
#### Returns:  
  
The n-dimensional FFT/IFFT of the input array.  
Type: `Array`  
  
  
</details>
## fft_cooley_tukey_parallel_inplace


```swift
fft_cooley_tukey_parallel_inplace(input: Array, mut out: Array, dims: List[Int], norm: String, conj_input: Bool = False, conj_output: Bool = False, input_divisor: SIMD[float64, 1] = SIMD(#kgen.float_literal<1|1>), output_divisor: SIMD[float32, 1] = SIMD(#kgen.float_literal<1|1>))
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Compute the n-dimensional FFT inplace using a hybrid version of the Cooley-Tukey algorithm.  
</summary>  
  
#### Args:  

* input `Array`: The input array.
* out `Array`: The output array.
* dims `List[Int]`: The dimensions along which to compute the FFT.
* norm `String`: The normalization mode.
* conj_input `Bool`: Whether to conjugate the input data. Default: False
* conj_output `Bool`: Whether to conjugate the output data. Default: False
* input_divisor `SIMD[float64, 1]`: The divisor for the input data. Default: SIMD(#kgen.float_literal<1|1>)
* output_divisor `SIMD[float32, 1]`: The divisor for the output data. Default: SIMD(#kgen.float_literal<1|1>)
  
  
</details>