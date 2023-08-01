<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdatePlanRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        //only admin can update the plan
        return auth()->user()->role == 'admin';
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array|string>
     */
    public function rules(): array
    {
        return [
            'type' => 'required|string',
            'name' => 'required|string',
            'code' => 'required|string',
            'price' => 'required|numeric',
            'slug' => 'required|string',
            'stripe_plan' => 'required|string',
            'description' => 'required|string',
            'options' => 'required|string',
        ];
    }
}
