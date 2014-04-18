timing_test(function() {
  at(0, function() {
    assert_styles('#test', {'clip':'rect(300px 400px 300px 400px)'});
  }, "Autogenerated");
  at(0.2, function() {
    assert_styles('#test', {'clip':'rect(240px 480px 360px 320px)'});
  }, "Autogenerated");
  at(0.4, function() {
    assert_styles('#test', {'clip':'rect(180px 560px 420px 240px)'});
  }, "Autogenerated");
  at(0.6000000000000001, function() {
    assert_styles('#test', {'clip':'rect(120px 640px 480px 160px)'});
  }, "Autogenerated");
  at(0.8, function() {
    assert_styles('#test', {'clip':'rect(60px 720px 540px 80px)'});
  }, "Autogenerated");
  at(1, function() {
    assert_styles('#test', {'clip':'rect(0px 800px 600px 0px)'});
  }, "Autogenerated");
  at(1.2, function() {
    assert_styles('#test', {'clip':'rect(0px 800px 600px 0px)'});
  }, "Autogenerated");
}, "Autogenerated checks.");
