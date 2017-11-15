// Enable Time Duration?
// Change Icon???
// IconTextBackgroundColor
// Enable Tab+Screen
chrome.storage.sync.get(null, function(items) {
    console.log(items['isRecording']);
    if (items['recording_type']=="desktop") {
        $("#record_type").val("desktop");
    } else {
        chrome.storage.sync.set({
            recording_type: 'tab'
        }, function() {
            $("#record_type").val("tab");
        });
    }
    if (items['isRecording']=="yes") {
        $("#start_record").text("Stop Recording");
    } else {
        chrome.storage.sync.set({
            isRecording: 'no'
        }, function() {
            $("#start_record").text("Start Recording");
        });
    }
});
$("#record_type").on('change', function (e) {
    var optionSelected = $(this).find("option:selected");
    var valueSelected  = optionSelected.val();
    var textSelected   = optionSelected.text();
    chrome.storage.sync.set({
        recording_type: valueSelected
    }, function() {
    });
});
$("#start_record").click(function(){
    if($(this).text()=="Start Recording"){
        chrome.runtime.sendMessage({type: $("#record_type").val()}, function(response) {
          if(response){
            chrome.storage.sync.set({
                isRecording: 'yes'
            }, function() {
                $("#start_record").text("Stop Recording");
            });
          }
        });
    }else if($(this).text()=="Stop Recording"){
        chrome.runtime.sendMessage({type: $("#record_type").val()}, function(response) {
          if(response){
            chrome.storage.sync.set({
                isRecording: 'no'
            }, function() {
                $("#start_record").text("Start Recording");
            });
          }
        });
    }
});


