require "test_helper"

class PetsControllerTest < ActionDispatch::IntegrationTest
  test "should get show" do
    get pets_show_url
    assert_response :success
  end

  test "should get update" do
    get pets_update_url
    assert_response :success
  end
end
