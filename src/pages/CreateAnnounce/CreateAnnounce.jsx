import React from 'react'

function CreateAnnounce() {
    return (
        <div>
          <div
            class="container card"
            style={{
              marginTop: "20px",
              borderRadius: "10px",
              backgroundColor: "#c9bc8e",
            }}
          >
            <div class="card-body">
              <div class="container card" style={{ borderRadius: "10px" }}>
                <div class="container form-group">
                  <label for="InputQuestion" style={{ marginTop: "10px" }}>
                    <strong>1.ระบุสิ่งที่คุณต้องการประกาศ</strong>
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="question"
                    aria-describedby=""
                    placeholder=""
                    style={{ backgroundColor: "#c4c4c4" }}
                  ></input>
                </div>
              </div>
    
              <div
                class="container card"
                style={{ borderRadius: "10px", marginTop: "10px" }}
              >
                <div class="container form-group">
                  <label for="InputQuestionDetail" style={{ marginTop: "10px" }}>
                    <strong>2.เขียนรายละเอียดของประกาศ</strong>
                  </label>
                  <textarea
                    type="text"
                    class="form-control"
                    id="questionDetail"
                    aria-describedby=""
                    placeholder=""
                    rows="10"
                    style={{ backgroundColor: "#c4c4c4" }}
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
          <div
            class="container"
            style={{ borderRadius: "10px", marginTop: "10px" }}
          >
            <button type="submit" class="btn btn-success mb-2">
              ประกาศ
            </button>
          </div>
        </div>
      );
}

export default CreateAnnounce