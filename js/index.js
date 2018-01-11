/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
 var app = {
    initialize: function() {
        this.bindEvents();
    },
    bindEvents: function() {
        // ...

        /* 1) Add a click handler for your button */
        document.getElementById('launch-editor').addEventListener('click', this.launchEditor, false);
    },
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    receivedEvent: function(id) {
        // ...
    },

    /* 2) Make a helper function to launch the Image Editor */
    launchEditor: function() {

    	/* 2.a) Prep work for calling `.edit()` */
        function success(newUrl) {
            console.log("Success!", newUrl);
        }

        function error(error) {
            console.log("Error!", error);
        }

        var imageUrl = "<YOUR_IMAGE_HERE>";

        var options = {
            outputType: CSDKImageEditor.OutputType.JPEG,
            tools: [
                CSDKImageEditor.ToolType.EFFECTS,
                CSDKImageEditor.ToolType.CROP
            ],
            quality: 50
        };

        /* 2.b) Launch the Image Editor */
        CSDKImageEditor.edit(success, error, imageUrl, options);
    }
};
 
 
 