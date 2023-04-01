<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Hash;

class AuthRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\Rule|array|string>
     */
    public function rules(): array
    {
        return [
            'name' => 'required|min:3',
            'email' => 'required|unique:users|max:255',
            'password' => 'required|min:6',
        ];
    }

   /**
    * persist form data
    */

    public function persist()
    {
        return $data = [
            'name' => $this->name,
            'email' => $this->email,
            'password'=> Hash::make($this->password)
        ];
    }
}
