<?php

class SlayerTaskAPIController extends \BaseController {

  private $slayerTaskRepository = null;

  private $current_user = null;

  /**
   * Set
   *
   * @param SlayerTaskRepository $slayerTaskRepository
   *
   * @return void.
   */
  public function __construct(SlayerTaskRepository $slayerTaskRepository)
  {
    // Hacked in user login for testing
    Auth::attempt(['email' => 'kingofcuddles@gmail.com', 'password' => 'password']);

    $this->slayerTaskRepository = $slayerTaskRepository;

    $this->current_user = Auth::user();
  }

	/**
	 * Display a listing of the resource.
	 *
	 * @return Response
	 */
	public function index()
	{
    return Response::json($this->slayerTaskRepository->getUsersTasks($this->current_user->id)->toArray(), 200);
	}

	/**
	 * Show the form for creating a new resource.
	 *
	 * @return Response
	 */
	public function create()
	{
		exit();
	}

	/**
	 * Store a newly created resource in storage.
	 *
	 * @return Response
	 */
	public function store()
	{
		exit();
	}

	/**
	 * Display the specified resource.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function show($id)
	{
		exit();
	}

	/**
	 * Show the form for editing the specified resource.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function edit($id)
	{
		exit();
	}

	/**
	 * Update the specified resource in storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function update($id)
	{
		exit();
	}

	/**
	 * Remove the specified resource from storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function destroy($id)
	{
		exit();
	}

}