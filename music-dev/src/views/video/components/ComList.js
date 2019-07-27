import React from "react";
import {Grid} from 'antd-mobile';


class ComList extends React.Component {
    data = [
        {
            icon: 'https://p1.music.126.net/HbAkUepjrA9rCXWv2lmwKg==/109951164107209042.gif?imageView&quality=100&tostatic=0',
            text: `全世界最好听的钢琴曲：卡农、雨...`,
            name: '冯冠豪'
        },
        {
            icon: 'https://p1.music.126.net/HbAkUepjrA9rCXWv2lmwKg==/109951164107209042.gif?imageView&quality=100&tostatic=0',
            text: `全世界最好听的钢琴曲：卡农、雨...`,
            name: '冯冠豪'
        },
        {
            icon: 'https://p1.music.126.net/HbAkUepjrA9rCXWv2lmwKg==/109951164107209042.gif?imageView&quality=100&tostatic=0',
            text: `全世界最好听的钢琴曲：卡农、雨...`,
            name: '冯冠豪'
        }
    ];

    render() {
        return (
            <div>
                <div>
                    <div className="sub-title" style={{
                        height: '50px',
                        lineHeight: '30px',
                        padding: '20px 10px 0',
                        backgroundColor: 'white',
                        fontSize: '20px'
                    }}>推荐歌单
                    </div>
                    <Grid data={this.data}
                          columnNum={3}
                          hasLine={false}
                          itemStyle={{height: '150px'}}
                          renderItem={dataItem => (
                              <div style={{padding: '12.5px', height: '150px'}}>
                                  <div style={{background:'url('+dataItem.icon+')',backgroundSize:'90px 90px',width: '90px', height: '90px'}}>
                                      <span>{dataItem.name}</span>
                                  </div>
                                  <div style={{color: '#888', fontSize: '14px', marginTop: '12px'}}>
                                      <span>{dataItem.text}</span>
                                  </div>
                              </div>
                          )}
                    />

                </div>
            </div>
        )
    }
}

export default ComList