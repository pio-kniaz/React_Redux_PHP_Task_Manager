<?php
		class Tasks_model extends CI_Model {
			public function __construct()
			{
				$this->load->database();
			}

			public function get_tasks()
			{
				$query=$this->db->get('tasks');
				return $query->result_array();
			}

			public function add_task()
			{
				$data = array(
					'title'=>$this->input->post('title'),
					'description'=>$this->input->post('description'),
					'done'=>$this->input->post('done'),
					'category'=>$this->input->post('category')
				);
				return $this->db->insert('tasks',$data);
			}

}

 ?>
