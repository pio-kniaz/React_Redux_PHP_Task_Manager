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
		header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
		header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
		$this->load->model('Tasks_model');
		$this->Tasks_model->add_task();
}

}
?><?php
