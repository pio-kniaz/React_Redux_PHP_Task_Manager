<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Tasks extends CI_Controller {


	public function tasks_api()
	{
		header('Access-Control-Allow-Origin: *');
		header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
		header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
		$this->load->model('Tasks_model');
		$data=$this->Tasks_model->get_tasks();
		$tasks['tasks']=$data;
		echo json_encode($tasks);
	}

	public function add_task()
	{
		header('Access-Control-Allow-Origin: *');
		header("Access-Control-Allow-Credentials: true");
		header("Access-Control-Max-Age: 1000");
		header("Access-Control-Allow-Headers: X-Requested-With, Content-Type, Origin, Cache-Control, Pragma, Authorization, Accept, Accept-Encoding");
		header("Access-Control-Allow-Methods: PUT, POST, GET, OPTIONS, DELETE");
		$this->load->model('Tasks_model');
		$this->Tasks_model->add_task();
	}

	public function delete_task($id)
	{
		http://localhost:3000
		header('Access-Control-Allow-Origin: *');
		header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
		header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
		$this->load->model('Tasks_model');
		$this->Tasks_model->delete_task($id);
	}

}
?><?php
