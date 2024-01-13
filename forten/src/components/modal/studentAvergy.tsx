import styled from 'styled-components';
import Chart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';

const Wrapper = styled.div`
  width: 18.75rem;
  height: 16rem;
  margin-bottom: 1rem;
`

const CenterContainer = styled.div`
  display: flex;
  align-items: center;

`

const Explan = styled.p`
  font-size: 1rem;
  font-weight: 900;
`

// 학생 평가 도넛 그래프 컴포넌트
function StudentAvergy() {

    let options: ApexOptions = {
        chart: {
            type: 'donut',
            width: '400',
            height: '200',
        },

        labels: ['이현진', '하재민', '김준범', '상필진'],
        series: [5, 10, 10, 3],
        dataLabels: {
            enabled: false,
        }
    }

    // 평가를 아무도 진행하지 않았을 때, 비어있기 때문에 그땐 어떻게 보여줄지 아마 삼항연산자를 사용하면 될 것 같습니다.
    // 일단 push로 배열에 데이터를 추가하고, 잘 나타나는 것을 확인 했습니다.
    options.labels.push('조준영');
    options.series.push(2);


    return (
        <Wrapper>
            <Explan>학생 평가 점수</Explan>
            <CenterContainer>
                <Chart
                    options={options}
                    series={options.series}
                    labels={options.labels}
                    type='donut'
                />
            </CenterContainer>
        </Wrapper>
    )
}

export default StudentAvergy;