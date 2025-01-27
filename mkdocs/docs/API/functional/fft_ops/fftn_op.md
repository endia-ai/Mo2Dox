



# fftn_op
  
[Source Code](https://github.com/endia-ai/Endia/tree/main/endia/functional/fft_ops/fftn_op.mojo)  
  

## FFTN
  
  
  

### Parent Traits
  

- AnyType
- DifferentiableFftOp
- UnknownDestructibility
  

### Functions

#### fwd


```swift
fwd(arg0: Array, dims: List[Int], norm: String) -> Array
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Sets up the Array object for the FFT operation.  
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
  
Computes the Jacobian-vector product for the FFT function.  
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
  
Computes the vector-Jacobian product for the FFT function.  
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
  
Executes the FFT operation inplace.  
</summary>  
  
#### Args:  

* curr `Array`
* args `List[Array]`
  
  
</details>
## fftn


```swift
fftn(x: Array, dims: List[Int] = List(), norm: String = String("backward")) -> Array
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Compute the n-dimensional FFT.  
</summary>  
  
#### Args:  

* x `Array`: The input array.
* dims `List[Int]`: The dimensions along which to compute the FFT. Default: List()
* norm `String`: The normalization mode. Default: String("backward")
  
#### Returns:  
  
The n-dimensional FFT of the input array.  
Type: `Array`  
  
  
</details>