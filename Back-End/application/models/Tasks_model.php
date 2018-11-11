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

}

 ?>
