<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Nette\Schema\Schema;


class Receipt extends Model
{
    use HasFactory;

    protected $fillable = [
        'id',
        'file_ids',
    ];

    public function up()
    {
        Schema::create('receipts', function (Blueprint $table) {
            $table->id();
            $table->json('file_ids');
            $table->timestamps();
        });
    }

    public function getFilesAttribute()
    {
        $fileIds = explode(",", $this->file_ids);
        return Vepost_tracking::findMany($fileIds);
    }
}
