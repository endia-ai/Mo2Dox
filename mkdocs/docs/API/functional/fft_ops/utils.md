



# utils
  
[Source Code](https://github.com/endia-ai/Endia/tree/main/endia/functional/fft_ops/utils.mojo)  
  

## DifferentiableFftOp
  
  
  

### Parent Traits
  

- AnyType
- UnknownDestructibility
  

### Functions

#### fwd


```swift
fwd(arg0: Array, dims: List[Int], norm: String) -> Array
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Show more details.  
</summary>  
  
#### Args:  

* arg0 `Array`
* dims `List[Int]`
* norm `String`
  
#### Returns:  
  
Type: `Array`  
  
  
</details>
#### jvp


```swift
jvp(primals: List[Array], tangents: List[Array]) -> Array
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Show more details.  
</summary>  
  
#### Args:  

* primals `List[Array]`
* tangents `List[Array]`
  
#### Returns:  
  
Type: `Array`  
  
  
</details>
#### vjp


```swift
vjp(primals: List[Array], grad: Array, out: Array) -> List[Array]
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Show more details.  
</summary>  
  
#### Args:  

* primals `List[Array]`
* grad `Array`
* out `Array`
  
#### Returns:  
  
Type: `List[Array]`  
  
  
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
## reverse_bits_simd


```swift
reverse_bits_simd(x: SIMD[uint32, nelts[::DType]()]) -> SIMD[uint32, nelts[::DType]()]
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Reverse the bits of a 32-bit integer.  
</summary>  
  
#### Args:  

* x `SIMD[uint32, nelts[::DType]()]`
  
#### Returns:  
  
Type: `SIMD[uint32, nelts[::DType]()]`  
  
  
</details>
## bit_reversal


```swift
bit_reversal(n: Int, reordered_arr_data: UnsafePointer[SIMD[uint32, 1]])
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Generate a bit reversal permutation for integers from 0 to n-1. Works for any positive integer n.  
</summary>  
  
#### Args:  

* n `Int`
* reordered_arr_data `UnsafePointer[SIMD[uint32, 1]]`
  
  
</details>
## copy_complex_and_cast


```swift
copy_complex_and_cast[dst_type: DType, src_type: DType](dst: UnsafePointer[SIMD[dst_type, 1]], src: UnsafePointer[SIMD[src_type, 1]], size: Int, conjugate_and_divide: Bool = False, divisor: SIMD[dst_type, 1] = SIMD(1))
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Copy complex data from one buffer to another and cast the data to a different type. Optionally conjugate and divide by a scalar (usefule for inverse FFT).  
</summary>  
  
Parameters:  

* dst_type `DType`
* src_type `DType`
  
#### Args:  

* dst `UnsafePointer[SIMD[dst_type, 1]]`
* src `UnsafePointer[SIMD[src_type, 1]]`
* size `Int`
* conjugate_and_divide `Bool` Default: False
* divisor `SIMD[dst_type, 1]` Default: SIMD(1)
  
  
</details>
## get_workload


```swift
get_workload(n: Int, divisions: Int, num_workers: Int) -> Int
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Calculate the workload size for each worker.  
</summary>  
  
#### Args:  

* n `Int`
* divisions `Int`
* num_workers `Int`
  
#### Returns:  
  
Type: `Int`  
  
  
</details>
## list_swap


```swift
list_swap(arg: List[Int], i: Int, j: Int) -> List[Int]
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Show more details.  
</summary>  
  
#### Args:  

* arg `List[Int]`
* i `Int`
* j `Int`
  
#### Returns:  
  
Type: `List[Int]`  
  
  
</details>
## determine_num_workers


```swift
determine_num_workers(size: Int) -> Int
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Determine the number of workers to use for parallelization.  
</summary>  
  
#### Args:  

* size `Int`
  
#### Returns:  
  
Type: `Int`  
  
  
</details>
## fft_op_array


```swift
fft_op_array(arg0: Array, name: String, fwd: fn(mut Array, List[Array]) raises -> None, jvp: fn(List[Array], List[Array]) raises -> Array, vjp: fn(List[Array], Array, Array) raises -> List[Array], dims: List[Int], norm: String) -> Array
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Show more details.  
</summary>  
  
#### Args:  

* arg0 `Array`
* name `String`
* fwd `fn(mut Array, List[Array]) raises -> None`
* jvp `fn(List[Array], List[Array]) raises -> Array`
* vjp `fn(List[Array], Array, Array) raises -> List[Array]`
* dims `List[Int]`
* norm `String`
  
#### Returns:  
  
Type: `Array`  
  
  
</details>
## encode_fft_params


```swift
encode_fft_params(dims: List[Int], norm: String) -> List[Int]
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Show more details.  
</summary>  
  
#### Args:  

* dims `List[Int]`
* norm `String`
  
#### Returns:  
  
Type: `List[Int]`  
  
  
</details>
## get_dims_from_encoded_params


```swift
get_dims_from_encoded_params(params: List[Int]) -> List[Int]
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Show more details.  
</summary>  
  
#### Args:  

* params `List[Int]`
  
#### Returns:  
  
Type: `List[Int]`  
  
  
</details>
## get_norm_from_encoded_params


```swift
get_norm_from_encoded_params(params: List[Int]) -> String
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Show more details.  
</summary>  
  
#### Args:  

* params `List[Int]`
  
#### Returns:  
  
Type: `String`  
  
  
</details>