<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Vepost_tracking extends Model
{
    use HasFactory;

    protected $table = 'vepost_tracking';

    protected $fillable = [
        'id',
        'UID',
        'mpID',
        'sender_username',
        'sender_vepost_addr',
        'sender_displayname',
        'sender_pub_ip',
        'sender_pub_port',
        'sender_prv_ip',
        'sender_prv_port',
        'sender_mac_addr',
        'sender_OS',
        'sender_OS_version',
        'sender_device_name',
        'sender_device_username',
        'receiver_username',
        'receiver_vepost_addr',
        'receiver_displayname',
        'receiver_pub_ip',
        'receiver_pub_port',
        'receiver_prv_ip',
        'receiver_prv_port',
        'receiver_mac_addr',
        'receiver_OS',
        'receiver_OS_version',
        'receiver_device_name',
        'receiver_device_username',
        'file_name',
        'file_size_original',
        'file_size_transfer',
        'send_option',
        'time_send_start',
        'ltime_send_start',
        'time_send_end',
        'ltime_send_end',
        'time_recv_end',
        'ltime_recv_end',
        'auto_recv',
        'PUCode',
        'subject_ref',
        's_abort',
        'r_abort',
        'decrypt_status',
        'time_post_opened',
        'view_once',
        'deleted_without_open',
        's_spare',
        's_req_del_ltime',
        's_req_del_time',
        's_req_del_done',
        'r_ltime_delete',
        'deleted_at',
        'created_at',
        'updated_at',
    ];
}
