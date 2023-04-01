<?php

namespace App\Http\Controllers\Api;

use Exception;
use App\Models\Blog;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Resources\BlogResource;
use Illuminate\Support\Facades\Validator;

class BlogController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $data = BlogResource::collection(Blog::all());
        if($data)
            return respondSuccess("Data retrieve successfully", $data);
        else
            return respondError('No data available','', 404);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'title' => 'required|min:3',
            'description' => 'required',
        ]);

        if ($validator->fails()) {
            return respondError(VALIDATION_ERROR, $validator->errors(), 422);
        }

        try{
            $data = Blog::create([
                'title' => $request->title,
                'description'=> $request->description
            ]);
            return respondSuccess(SUCCESS, $data, 201);
        }catch(Exception $e){
            return respondError('Failed to create blog'.$e->getMessage(), $e->getCode());
        }


    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $data = Blog::find($id);
        if($data)
            return respondSuccess("Data retrieve successfully", new BlogResource($data));
        else
            return respondError('No data available','', 404);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Blog $blog)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $validator = Validator::make($request->all(), [
            'title' => 'required|min:3',
            'description' => 'required',
        ]);

        if ($validator->fails()) {
            return respondError(VALIDATION_ERROR, $validator->errors(), 422);
        }

        try{
            $blog = Blog::find($id);
            if($blog){
                $blog->title = $request->title;
                $blog->description = $request->description;
                $blog->update();
                return respondSuccess(UPDATE_SUCCESS, new BlogResource($blog), 200);
            }
            return respondError(UPDATE_FAIL, '', 400);
        }catch(Exception $e){
            return respondError(UPDATE_FAIL, '', 400);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        try{
            $blog = Blog::findOrFail($id);
            if($blog->delete()){
                return respondSuccess(DELETE_SUCCESS);
            }
            return respondError(DELETE_FAIL);
        }catch(Exception $e){
            return respondError(DELETE_FAIL);
        }
    }
}
