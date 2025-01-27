



# init_ops
  
[Source Code](https://github.com/endia-ai/Endia/tree/main/endia/functional/init_ops/init_ops.mojo)  
  

## array


```swift
array(dims: List[Int], requires_grad: Bool = False) -> Array
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Show more details.  
</summary>  
  
#### Args:  

* dims `List[Int]`
* requires_grad `Bool` Default: False
  
#### Returns:  
  
Type: `Array`  
  
  
</details>

```swift
array(arr_str: StringLiteral, requires_grad: Bool = False) -> Array
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Show more details.  
</summary>  
  
#### Args:  

* arr_str `StringLiteral`
* requires_grad `Bool` Default: False
  
#### Returns:  
  
Type: `Array`  
  
  
</details>
## tensor


```swift
tensor(dims: List[Int], requires_grad: Bool = False) -> Array
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Show more details.  
</summary>  
  
#### Args:  

* dims `List[Int]`
* requires_grad `Bool` Default: False
  
#### Returns:  
  
Type: `Array`  
  
  
</details>

```swift
tensor(arr_str: StringLiteral, requires_grad: Bool = False) -> Array
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Show more details.  
</summary>  
  
#### Args:  

* arr_str `StringLiteral`
* requires_grad `Bool` Default: False
  
#### Returns:  
  
Type: `Array`  
  
  
</details>
## ndarray


```swift
ndarray(dims: List[Int], requires_grad: Bool = False) -> Array
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Show more details.  
</summary>  
  
#### Args:  

* dims `List[Int]`
* requires_grad `Bool` Default: False
  
#### Returns:  
  
Type: `Array`  
  
  
</details>

```swift
ndarray(arr_str: StringLiteral, requires_grad: Bool = False) -> Array
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Show more details.  
</summary>  
  
#### Args:  

* arr_str `StringLiteral`
* requires_grad `Bool` Default: False
  
#### Returns:  
  
Type: `Array`  
  
  
</details>
## Tensor


```swift
Tensor(dims: List[Int], requires_grad: Bool = False) -> Array
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Show more details.  
</summary>  
  
#### Args:  

* dims `List[Int]`
* requires_grad `Bool` Default: False
  
#### Returns:  
  
Type: `Array`  
  
  
</details>

```swift
Tensor(arr_str: StringLiteral, requires_grad: Bool = False) -> Array
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Show more details.  
</summary>  
  
#### Args:  

* arr_str `StringLiteral`
* requires_grad `Bool` Default: False
  
#### Returns:  
  
Type: `Array`  
  
  
</details>
## arange_


```swift
arange_(mut arg: Array)
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Show more details.  
</summary>  
  
#### Args:  

* arg `Array`
  
  
</details>
## linspace


```swift
linspace(start: SIMD[float32, 1] = SIMD(0), end: SIMD[float32, 1] = SIMD(1), num: Int = 50, requires_grad: Bool = False) -> Array
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Show more details.  
</summary>  
  
#### Args:  

* start `SIMD[float32, 1]` Default: SIMD(0)
* end `SIMD[float32, 1]` Default: SIMD(1)
* num `Int` Default: 50
* requires_grad `Bool` Default: False
  
#### Returns:  
  
Type: `Array`  
  
  
</details>
## arange


```swift
arange(start: SIMD[float32, 1] = SIMD(0), end: SIMD[float32, 1] = SIMD(1), step: SIMD[float32, 1] = SIMD(1), requires_grad: Bool = False) -> Array
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Show more details.  
</summary>  
  
#### Args:  

* start `SIMD[float32, 1]` Default: SIMD(0)
* end `SIMD[float32, 1]` Default: SIMD(1)
* step `SIMD[float32, 1]` Default: SIMD(1)
* requires_grad `Bool` Default: False
  
#### Returns:  
  
Type: `Array`  
  
  
</details>
## zeros_


```swift
zeros_(mut arg: Array)
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Show more details.  
</summary>  
  
#### Args:  

* arg `Array`
  
  
</details>
## zeros


```swift
zeros(shape: List[Int], requires_grad: Bool = False) -> Array
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Show more details.  
</summary>  
  
#### Args:  

* shape `List[Int]`
* requires_grad `Bool` Default: False
  
#### Returns:  
  
Type: `Array`  
  
  
</details>
## zeros_like


```swift
zeros_like(arg: Array) -> Array
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Show more details.  
</summary>  
  
#### Args:  

* arg `Array`
  
#### Returns:  
  
Type: `Array`  
  
  
</details>
## ones_


```swift
ones_(mut arg: Array)
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Show more details.  
</summary>  
  
#### Args:  

* arg `Array`
  
  
</details>
## ones


```swift
ones(shape: List[Int], requires_grad: Bool = False) -> Array
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Show more details.  
</summary>  
  
#### Args:  

* shape `List[Int]`
* requires_grad `Bool` Default: False
  
#### Returns:  
  
Type: `Array`  
  
  
</details>
## ones_like


```swift
ones_like(arg: Array) -> Array
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Show more details.  
</summary>  
  
#### Args:  

* arg `Array`
  
#### Returns:  
  
Type: `Array`  
  
  
</details>
## eye_


```swift
eye_(mut arg: Array)
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Show more details.  
</summary>  
  
#### Args:  

* arg `Array`
  
  
</details>
## eye


```swift
eye(n: Int, requires_grad: Bool = False) -> Array
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Show more details.  
</summary>  
  
#### Args:  

* n `Int`
* requires_grad `Bool` Default: False
  
#### Returns:  
  
Type: `Array`  
  
  
</details>
## eye_like


```swift
eye_like(arg: Array) -> Array
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Show more details.  
</summary>  
  
#### Args:  

* arg `Array`
  
#### Returns:  
  
Type: `Array`  
  
  
</details>
## fill_


```swift
fill_(mut arg: Array, value: SIMD[float32, 1])
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Show more details.  
</summary>  
  
#### Args:  

* arg `Array`
* value `SIMD[float32, 1]`
  
  
</details>
## full


```swift
full(shape: List[Int], value: SIMD[float32, 1], requires_grad: Bool = False) -> Array
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Show more details.  
</summary>  
  
#### Args:  

* shape `List[Int]`
* value `SIMD[float32, 1]`
* requires_grad `Bool` Default: False
  
#### Returns:  
  
Type: `Array`  
  
  
</details>
## fill_like


```swift
fill_like(arg: Array, value: SIMD[float32, 1]) -> Array
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Show more details.  
</summary>  
  
#### Args:  

* arg `Array`
* value `SIMD[float32, 1]`
  
#### Returns:  
  
Type: `Array`  
  
  
</details>
## indeces


```swift
indeces(shape: List[Int], stride: List[Int], storage_offset: Int, requires_grad: Bool = False) -> Array
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Show more details.  
</summary>  
  
#### Args:  

* shape `List[Int]`
* stride `List[Int]`
* storage_offset `Int`
* requires_grad `Bool` Default: False
  
#### Returns:  
  
Type: `Array`  
  
  
</details>
## randu_


```swift
randu_(mut arg: Array, min: SIMD[float32, 1] = SIMD(0), max: SIMD[float32, 1] = SIMD(1))
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Show more details.  
</summary>  
  
#### Args:  

* arg `Array`
* min `SIMD[float32, 1]` Default: SIMD(0)
* max `SIMD[float32, 1]` Default: SIMD(1)
  
  
</details>
## randu


```swift
randu(shape: List[Int], min: SIMD[float32, 1] = SIMD(0), max: SIMD[float32, 1] = SIMD(1), requires_grad: Bool = False) -> Array
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Show more details.  
</summary>  
  
#### Args:  

* shape `List[Int]`
* min `SIMD[float32, 1]` Default: SIMD(0)
* max `SIMD[float32, 1]` Default: SIMD(1)
* requires_grad `Bool` Default: False
  
#### Returns:  
  
Type: `Array`  
  
  
</details>
## randu_like


```swift
randu_like(mut arg: Array, min: SIMD[float32, 1] = SIMD(0), max: SIMD[float32, 1] = SIMD(1)) -> Array
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Show more details.  
</summary>  
  
#### Args:  

* arg `Array`
* min `SIMD[float32, 1]` Default: SIMD(0)
* max `SIMD[float32, 1]` Default: SIMD(1)
  
#### Returns:  
  
Type: `Array`  
  
  
</details>
## randn_


```swift
randn_(mut arg: Array, mean: SIMD[float64, 1] = SIMD(0), std: SIMD[float64, 1] = SIMD(1))
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Show more details.  
</summary>  
  
#### Args:  

* arg `Array`
* mean `SIMD[float64, 1]` Default: SIMD(0)
* std `SIMD[float64, 1]` Default: SIMD(1)
  
  
</details>
## randn


```swift
randn(shape: List[Int], mean: SIMD[float64, 1] = SIMD(0), std: SIMD[float64, 1] = SIMD(1), requires_grad: Bool = False) -> Array
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Show more details.  
</summary>  
  
#### Args:  

* shape `List[Int]`
* mean `SIMD[float64, 1]` Default: SIMD(0)
* std `SIMD[float64, 1]` Default: SIMD(1)
* requires_grad `Bool` Default: False
  
#### Returns:  
  
Type: `Array`  
  
  
</details>
## randn_like


```swift
randn_like(mut arg: Array, mean: SIMD[float64, 1] = SIMD(0), std: SIMD[float64, 1] = SIMD(1)) -> Array
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Show more details.  
</summary>  
  
#### Args:  

* arg `Array`
* mean `SIMD[float64, 1]` Default: SIMD(0)
* std `SIMD[float64, 1]` Default: SIMD(1)
  
#### Returns:  
  
Type: `Array`  
  
  
</details>
## rand_he_normal_


```swift
rand_he_normal_(mut arg: Array, fan_in: SIMD[float64, 1] = SIMD(1))
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Show more details.  
</summary>  
  
#### Args:  

* arg `Array`
* fan_in `SIMD[float64, 1]` Default: SIMD(1)
  
  
</details>
## rand_he_normal


```swift
rand_he_normal(shape: List[Int], fan_in: SIMD[float64, 1] = SIMD(1), requires_grad: Bool = False) -> Array
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Show more details.  
</summary>  
  
#### Args:  

* shape `List[Int]`
* fan_in `SIMD[float64, 1]` Default: SIMD(1)
* requires_grad `Bool` Default: False
  
#### Returns:  
  
Type: `Array`  
  
  
</details>
## rand_he_normal_like


```swift
rand_he_normal_like(arg: Array, fan_in: SIMD[float64, 1] = SIMD(1)) -> Array
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Show more details.  
</summary>  
  
#### Args:  

* arg `Array`
* fan_in `SIMD[float64, 1]` Default: SIMD(1)
  
#### Returns:  
  
Type: `Array`  
  
  
</details>
## rand_he_uniform_


```swift
rand_he_uniform_(mut arg: Array, fan_in: SIMD[float32, 1] = SIMD(1))
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Show more details.  
</summary>  
  
#### Args:  

* arg `Array`
* fan_in `SIMD[float32, 1]` Default: SIMD(1)
  
  
</details>
## rand_he_uniform


```swift
rand_he_uniform(shape: List[Int], fan_in: SIMD[float32, 1] = SIMD(1), requires_grad: Bool = False) -> Array
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Show more details.  
</summary>  
  
#### Args:  

* shape `List[Int]`
* fan_in `SIMD[float32, 1]` Default: SIMD(1)
* requires_grad `Bool` Default: False
  
#### Returns:  
  
Type: `Array`  
  
  
</details>
## rand_he_uniform_like


```swift
rand_he_uniform_like(arg: Array, fan_in: SIMD[float32, 1] = SIMD(1)) -> Array
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Show more details.  
</summary>  
  
#### Args:  

* arg `Array`
* fan_in `SIMD[float32, 1]` Default: SIMD(1)
  
#### Returns:  
  
Type: `Array`  
  
  
</details>
## rand_xavier_normal_


```swift
rand_xavier_normal_(mut arg: Array, fan_in: SIMD[float64, 1] = SIMD(1), fan_out: SIMD[float64, 1] = SIMD(1))
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Show more details.  
</summary>  
  
#### Args:  

* arg `Array`
* fan_in `SIMD[float64, 1]` Default: SIMD(1)
* fan_out `SIMD[float64, 1]` Default: SIMD(1)
  
  
</details>
## rand_xavier_normal


```swift
rand_xavier_normal(shape: List[Int], fan_in: SIMD[float64, 1] = SIMD(1), fan_out: SIMD[float64, 1] = SIMD(1), requires_grad: Bool = False) -> Array
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Show more details.  
</summary>  
  
#### Args:  

* shape `List[Int]`
* fan_in `SIMD[float64, 1]` Default: SIMD(1)
* fan_out `SIMD[float64, 1]` Default: SIMD(1)
* requires_grad `Bool` Default: False
  
#### Returns:  
  
Type: `Array`  
  
  
</details>
## rand_xavier_normal_like


```swift
rand_xavier_normal_like(mut arg: Array, fan_in: SIMD[float64, 1] = SIMD(1), fan_out: SIMD[float64, 1] = SIMD(1)) -> Array
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Show more details.  
</summary>  
  
#### Args:  

* arg `Array`
* fan_in `SIMD[float64, 1]` Default: SIMD(1)
* fan_out `SIMD[float64, 1]` Default: SIMD(1)
  
#### Returns:  
  
Type: `Array`  
  
  
</details>
## rand_xavier_uniform_


```swift
rand_xavier_uniform_(mut arg: Array, fan_in: SIMD[float32, 1] = SIMD(1), fan_out: SIMD[float32, 1] = SIMD(1))
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Show more details.  
</summary>  
  
#### Args:  

* arg `Array`
* fan_in `SIMD[float32, 1]` Default: SIMD(1)
* fan_out `SIMD[float32, 1]` Default: SIMD(1)
  
  
</details>
## rand_xavier_uniform


```swift
rand_xavier_uniform(shape: List[Int], fan_in: SIMD[float32, 1] = SIMD(1), fan_out: SIMD[float32, 1] = SIMD(1), requires_grad: Bool = False) -> Array
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Show more details.  
</summary>  
  
#### Args:  

* shape `List[Int]`
* fan_in `SIMD[float32, 1]` Default: SIMD(1)
* fan_out `SIMD[float32, 1]` Default: SIMD(1)
* requires_grad `Bool` Default: False
  
#### Returns:  
  
Type: `Array`  
  
  
</details>
## rand_xavier_uniform_like


```swift
rand_xavier_uniform_like(mut arg: Array, fan_in: SIMD[float32, 1] = SIMD(1), fan_out: SIMD[float32, 1] = SIMD(1)) -> Array
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Show more details.  
</summary>  
  
#### Args:  

* arg `Array`
* fan_in `SIMD[float32, 1]` Default: SIMD(1)
* fan_out `SIMD[float32, 1]` Default: SIMD(1)
  
#### Returns:  
  
Type: `Array`  
  
  
</details>
## rand_lecun_normal_


```swift
rand_lecun_normal_(mut arg: Array, fan_in: SIMD[float64, 1] = SIMD(1))
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Show more details.  
</summary>  
  
#### Args:  

* arg `Array`
* fan_in `SIMD[float64, 1]` Default: SIMD(1)
  
  
</details>
## rand_lecun_normal


```swift
rand_lecun_normal(shape: List[Int], fan_in: SIMD[float64, 1] = SIMD(1), requires_grad: Bool = False) -> Array
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Show more details.  
</summary>  
  
#### Args:  

* shape `List[Int]`
* fan_in `SIMD[float64, 1]` Default: SIMD(1)
* requires_grad `Bool` Default: False
  
#### Returns:  
  
Type: `Array`  
  
  
</details>
## rand_lecun_normal_like


```swift
rand_lecun_normal_like(mut arg: Array, fan_in: SIMD[float64, 1] = SIMD(1)) -> Array
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Show more details.  
</summary>  
  
#### Args:  

* arg `Array`
* fan_in `SIMD[float64, 1]` Default: SIMD(1)
  
#### Returns:  
  
Type: `Array`  
  
  
</details>
## rand_lecun_uniform_


```swift
rand_lecun_uniform_(mut arg: Array, fan_in: SIMD[float32, 1] = SIMD(1))
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Show more details.  
</summary>  
  
#### Args:  

* arg `Array`
* fan_in `SIMD[float32, 1]` Default: SIMD(1)
  
  
</details>
## rand_lecun_uniform


```swift
rand_lecun_uniform(shape: List[Int], fan_in: SIMD[float32, 1] = SIMD(1), requires_grad: Bool = False) -> Array
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Show more details.  
</summary>  
  
#### Args:  

* shape `List[Int]`
* fan_in `SIMD[float32, 1]` Default: SIMD(1)
* requires_grad `Bool` Default: False
  
#### Returns:  
  
Type: `Array`  
  
  
</details>
## rand_lecun_uniform_like


```swift
rand_lecun_uniform_like(mut arg: Array, fan_in: SIMD[float32, 1] = SIMD(1)) -> Array
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Show more details.  
</summary>  
  
#### Args:  

* arg `Array`
* fan_in `SIMD[float32, 1]` Default: SIMD(1)
  
#### Returns:  
  
Type: `Array`  
  
  
</details>
## complex


```swift
complex(real: Array, imag: Array, requires_grad: Bool = False) -> Array
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Show more details.  
</summary>  
  
#### Args:  

* real `Array`
* imag `Array`
* requires_grad `Bool` Default: False
  
#### Returns:  
  
Type: `Array`  
  
  
</details>
## randn_complex


```swift
randn_complex(shape: List[Int], mean: SIMD[float64, 1] = SIMD(0), std: SIMD[float64, 1] = SIMD(1), requires_grad: Bool = False) -> Array
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Show more details.  
</summary>  
  
#### Args:  

* shape `List[Int]`
* mean `SIMD[float64, 1]` Default: SIMD(0)
* std `SIMD[float64, 1]` Default: SIMD(1)
* requires_grad `Bool` Default: False
  
#### Returns:  
  
Type: `Array`  
  
  
</details>
## randu_complex


```swift
randu_complex(shape: List[Int], min: SIMD[float32, 1] = SIMD(0), max: SIMD[float32, 1] = SIMD(1), requires_grad: Bool = False) -> Array
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Show more details.  
</summary>  
  
#### Args:  

* shape `List[Int]`
* min `SIMD[float32, 1]` Default: SIMD(0)
* max `SIMD[float32, 1]` Default: SIMD(1)
* requires_grad `Bool` Default: False
  
#### Returns:  
  
Type: `Array`  
  
  
</details>
## fill_complex


```swift
fill_complex(shape: List[Int], value_real: SIMD[float32, 1], value_imag: SIMD[float32, 1], requires_grad: Bool = False) -> Array
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Show more details.  
</summary>  
  
#### Args:  

* shape `List[Int]`
* value_real `SIMD[float32, 1]`
* value_imag `SIMD[float32, 1]`
* requires_grad `Bool` Default: False
  
#### Returns:  
  
Type: `Array`  
  
  
</details>