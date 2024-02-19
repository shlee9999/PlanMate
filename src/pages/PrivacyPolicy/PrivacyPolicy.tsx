import { FC } from 'react'
import * as s from './styled'
import LogoSvg from 'assets/images/logo.svg'
import { UnorderedList } from 'pages/Tos/styled'

export const PrivacyPolicy: FC = () => {
  return (
    <s.PrivacyPolicy>
      <s.PageHeader>
        <s.Logo src={LogoSvg} alt="logo_img" />
        <p>개인정보 처리방침</p>
      </s.PageHeader>
      <s.TermsContainer>
        <s.Description>
          &lt; 웹용 플래너 &gt;(&apos;https://d1z7jjwxax7xop.cloudfront.net&apos; 이하 &apos;웹용플래너&apos;)은(는)
          「개인정보 보호법」 제30조에 따라 정보주체의 개인정보를 보호하고 이와 관련한 고충을 신속하고 원활하게 처리할
          수 있도록 하기 위하여 다음과 같이 개인정보 처리방침을 수립·공개합니다.
          <br />
          <br />이 개인정보처리방침은 2023년 1월 1부터 적용됩니다.
        </s.Description>
        <s.TermsSection>
          <s.Title>제1조 (개인정보의 처리 목적)</s.Title>
          <s.Description>
            &lt; 웹용 플래너 &gt;(&apos;https://d1z7jjwxax7xop.cloudfront.net&apos; 이하 &apos;웹용플래너&apos;)은(는)
            다음의 목적을 위하여 개인정보를 처리합니다. 처리하고 있는 개인정보는 다음의 목적 이외의 용도로는 이용되지
            않으며 이용 목적이 변경되는 경우에는 「개인정보 보호법」 제18조에 따라 별도의 동의를 받는 등 필요한 조치를
            이행할 예정입니다.
          </s.Description>
          <s.OrderedList>
            <s.ListItem>
              홈페이지 회원가입 및 관리
              <br /> 회원 가입의사 확인, 회원제 서비스 제공에 따른 본인 식별·인증, 회원자격 유지·관리, 서비스 부정이용
              방지, 만14세 미만 아동의 개인정보 처리 시 법정대리인의 동의여부 확인, 각종 고지·통지, 고충처리 목적으로
              개인정보를 처리합니다.
            </s.ListItem>
            <s.ListItem>
              민원사무 처리 <br /> 민원인의 신원 확인, 민원사항 확인, 사실조사를 위한 연락·통지, 처리결과 통보 목적으로
              개인정보를 처리합니다.
            </s.ListItem>
            <s.ListItem>
              재화 또는 서비스 제공 <br /> 서비스 제공, 콘텐츠 제공, 맞춤서비스 제공, 본인인증을 목적으로 개인정보를
              처리합니다.
            </s.ListItem>
            <s.ListItem>
              마케팅 및 광고에의 활용 <br /> 신규 서비스(제품) 개발 및 맞춤 서비스 제공, 이벤트 및 광고성 정보 제공 및
              참여기회 제공 , 인구통계학적 특성에 따른 서비스 제공 및 광고 게재 , 서비스의 유효성 확인, 접속빈도 파악
              또는 회원의 서비스 이용에 대한 통계 등을 목적으로 개인정보를 처리합니다.
            </s.ListItem>
          </s.OrderedList>
        </s.TermsSection>
        <s.TermsSection>
          <s.Title>제2조(개인정보의 처리 및 보유 기간)</s.Title>
          <s.Description>
            <s.DefaultList>
              <s.ListItem>
                ① &lt; 웹용 플래너 &gt;은(는) 법령에 따른 개인정보 보유·이용기간 또는 정보주체로부터 개인정보를 수집
                시에 동의받은 개인정보 보유·이용기간 내에서 개인정보를 처리·보유합니다.
              </s.ListItem>
              <s.ListItem> ② 각각의 개인정보 처리 및 보유 기간은 다음과 같습니다.</s.ListItem>
            </s.DefaultList>
          </s.Description>
        </s.TermsSection>
        <s.TermsSection>
          <s.Title>제3조(처리하는 개인정보의 항목)</s.Title>
          <s.Description>
            ① &lt; 웹용 플래너 &gt;은(는) 다음의 개인정보 항목을 처리하고 있습니다.
            <s.OrderedList>
              <s.ListItem>
                &lt; 홈페이지 회원가입 및 관리 &gt;
                <s.UnorderedList>
                  <s.ListItem>
                    필수항목 : 이름, 생년월일, 성별, 로그인ID, 비밀번호, 비밀번호 질문과 답, 휴대전화번호, 이메일, 접속
                    IP 정보, 쿠키, 접속 로그, 서비스 이용 기록, 법정대리인 휴대전화번호, 법정대리인 이름
                  </s.ListItem>
                  <s.ListItem>선택항목 :</s.ListItem>
                </s.UnorderedList>
              </s.ListItem>
            </s.OrderedList>
          </s.Description>
        </s.TermsSection>
        <s.TermsSection>
          <s.Title>제4조(만 14세 미만 아동의 개인정보 처리에 관한 사항)</s.Title>
          <s.Description>
            <s.DefaultList>
              <s.ListItem>
                ① &lt;개인정보처리자명&gt;은(는) 만 14세 미만 아동에 대해 개인정보를 수집할 때 법정대리인의 동의를 얻어
                해당 서비스 수행에 필요한 최소한의 개인정보를 수집합니다.
              </s.ListItem>
              <s.ListItem>필수항목 : 법정 대리인의 성명, 관계, 연락처</s.ListItem>
              <s.ListItem>
                ② 또한, &lt;개인정보처리자명&gt;의 &lt;처리목적&gt; 관련 홍보를 위해 아동의 개인정보를 수집할 경우에는
                법정대리인으로부터 별도의 동의를 얻습니다.
              </s.ListItem>
              <s.ListItem>
                ③ &lt;개인정보처리자명&gt;은(는) 만 14세 미만 아동의 개인정보를 수집할 때에는 아동에게 법정대리인의
                성명, 연락처와 같이 최소한의 정보를 요구할 수 있으며, 다음 중 하나의 방법으로 적법한 법정대리인이
                동의하였는지를 확인합니다.
                <UnorderedList>
                  <s.ListItem>
                    동의 내용을 게재한 인터넷 사이트에 법정대리인이 동의 여부를 표시하도록 하고 개인정보처리자가 그 동의
                    표시를 확인했음을 법정대리인의 휴대전화 문자 메시지로 알리는 방법
                  </s.ListItem>
                  <s.ListItem>
                    동의 내용을 게재한 인터넷 사이트에 법정대리인이 동의 여부를 표시하도록 하고 법정대리인의
                    신용카드·직불카드 등의 카드정보를 제공받는 방법
                  </s.ListItem>
                  <s.ListItem>
                    동의 내용을 게재한 인터넷 사이트에 법정대리인이 동의 여부를 표시하도록 하고 법정대리인의 휴대전화
                    본인인증 등을 통해 본인 여부를 확인하는 방법
                  </s.ListItem>
                  <s.ListItem>
                    동의 내용이 적힌 서면을 법정대리인에게 직접 발급하거나, 우편 또는 팩스를 통하여 전달하고
                    법정대리인이 동의 내용에 대하여 서명날인 후 제출하도록 하는 방법
                  </s.ListItem>
                  <s.ListItem>
                    동의 내용이 적힌 전자우편을 발송하여 법정대리인으로부터 동의의 의사표시가 적힌 전자우편을 전송받는
                    방법
                  </s.ListItem>
                  <s.ListItem>
                    전화를 통하여 동의 내용을 법정대리인에게 알리고 동의를 얻거나 인터넷주소 등 동의 내용을 확인할 수
                    있는 방법을 안내하고 재차 전화 통화를 통하여 동의를 얻는 방법
                  </s.ListItem>
                  <s.ListItem>
                    그 밖에 위와 준하는 방법으로 법정대리인에게 동의 내용을 알리고 동의의 의사표시를 확인하는 방법
                  </s.ListItem>
                </UnorderedList>
              </s.ListItem>
            </s.DefaultList>
          </s.Description>
        </s.TermsSection>
        <s.TermsSection>
          <s.Title>제5조(개인정보의 파기절차 및 파기방법)</s.Title>
          <s.Description>
            <s.DefaultList>
              <s.ListItem>
                ① &lt; 웹용 플래너 &gt; 은(는) 개인정보 보유기간의 경과, 처리목적 달성 등 개인정보가 불필요하게 되었을
                때에는 지체없이 해당 개인정보를 파기합니다.
              </s.ListItem>
              <s.ListItem>
                ② 정보주체로부터 동의받은 개인정보 보유기간이 경과하거나 처리목적이 달성되었음에도 불구하고 다른 법령에
                따라 개인정보를 계속 보존하여야 하는 경우에는, 해당 개인정보를 별도의 데이터베이스(DB)로 옮기거나
                보관장소를 달리하여 보존합니다.
                <s.OrderedList>
                  <s.ListItem>법령 근거 :</s.ListItem>
                  <s.ListItem>보존하는 개인정보 항목 : 계좌정보, 거래날짜</s.ListItem>
                </s.OrderedList>
              </s.ListItem>
              <s.ListItem>③ 개인정보 파기의 절차 및 방법은 다음과 같습니다.</s.ListItem>
              <s.OrderedList>
                <s.ListItem>
                  파기절차 : &lt; 웹용 플래너 &gt; 은(는) 파기 사유가 발생한 개인정보를 선정하고, &lt; 웹용 플래너 &gt;
                  의 개인정보 보호책임자의 승인을 받아 개인정보를 파기합니다.
                </s.ListItem>
                <s.ListItem>
                  파기방법 : 전자적 파일 형태의 정보는 기록을 재생할 수 없는 기술적 방법을 사용합니다
                </s.ListItem>
              </s.OrderedList>
            </s.DefaultList>
          </s.Description>
        </s.TermsSection>
        <s.TermsSection>
          <s.Title>제6조(정보주체와 법정대리인의 권리·의무 및 그 행사방법에 관한 사항)</s.Title>
          <s.Description>
            <s.DefaultList>
              <s.ListItem>
                ① 정보주체는 웹용 플래너에 대해 언제든지 개인정보 열람·정정·삭제·처리정지 요구 등의 권리를 행사할 수
                있습니다.
              </s.ListItem>
              <s.ListItem>
                ② 제1항에 따른 권리 행사는웹용 플래너에 대해 「개인정보 보호법」 시행령 제41조제1항에 따라 서면,
                전자우편, 모사전송(FAX) 등을 통하여 하실 수 있으며 웹용 플래너은(는) 이에 대해 지체 없이 조치하겠습니다.
              </s.ListItem>
              <s.ListItem>
                ③ 제1항에 따른 권리 행사는 정보주체의 법정대리인이나 위임을 받은 자 등 대리인을 통하여 하실 수
                있습니다.이 경우 “개인정보 처리 방법에 관한 고시(제2020-7호)” 별지 제11호 서식에 따른 위임장을
                제출하셔야 합니다.
              </s.ListItem>
              <s.ListItem>
                ④ 개인정보 열람 및 처리정지 요구는 「개인정보 보호법」 제35조 제4항, 제37조 제2항에 의하여 정보주체의
                권리가 제한 될 수 있습니다.
              </s.ListItem>
              <s.ListItem>
                ⑤ 개인정보의 정정 및 삭제 요구는 다른 법령에서 그 개인정보가 수집 대상으로 명시되어 있는 경우에는 그
                삭제를 요구할 수 없습니다.
              </s.ListItem>
              <s.ListItem>
                ⑥ 웹용 플래너은(는) 정보주체 권리에 따른 열람의 요구, 정정·삭제의 요구, 처리정지의 요구 시 열람 등
                요구를 한 자가 본인이거나 정당한 대리인인지를 확인합니다.
              </s.ListItem>
            </s.DefaultList>
          </s.Description>
        </s.TermsSection>
        <s.TermsSection>
          <s.Title>
            제7조(개인정보의 안전성 확보조치에 관한 사항)&lt; 웹용 플래너 &gt;은(는) 개인정보의 안전성 확보를 위해
            다음과 같은 조치를 취하고 있습니다.
          </s.Title>
          <s.Description>
            <s.DefaultList>
              <s.ListItem>
                ① 내부관리계획의 수립 및 시행개인정보의 안전한 처리를 위하여 내부관리계획을 수립하고 시행하고 있습니다.
              </s.ListItem>
              <s.ListItem>
                ② 개인정보 취급 직원의 최소화 및 교육개인정보를 취급하는 직원을 지정하고 담당자에 한정시켜 최소화 하여
                개인정보를 관리하는 대책을 시행하고 있습니다.
              </s.ListItem>
              <s.ListItem>
                ③ 개인정보에 대한 접근 제한개인정보를 처리하는 데이터베이스시스템에 대한 접근권한의 부여,변경,말소를
                통하여 개인정보에 대한 접근통제를 위하여 필요한 조치를 하고 있으며 침입차단시스템을 이용하여
                외부로부터의 무단 접근을 통제하고 있습니다.
              </s.ListItem>
              <s.ListItem>
                ④ 비인가자에 대한 출입 통제개인정보를 보관하고 있는 물리적 보관 장소를 별도로 두고 이에 대해 출입통제
                절차를 수립, 운영하고 있습니다.
              </s.ListItem>
            </s.DefaultList>
          </s.Description>
        </s.TermsSection>
        <s.TermsSection>
          <s.Title>제8조(개인정보를 자동으로 수집하는 장치의 설치·운영 및 그 거부에 관한 사항)</s.Title>
          <s.Description>
            <s.DefaultList>
              <s.ListItem>
                ① 웹용 플래너 은(는) 이용자에게 개별적인 맞춤서비스를 제공하기 위해 이용정보를 저장하고 수시로 불러오는
                ‘쿠키(cookie)’를 사용합니다.
              </s.ListItem>
              <s.ListItem>
                ② 쿠키는 웹사이트를 운영하는데 이용되는 서버(http)가 이용자의 컴퓨터 브라우저에게 보내는 소량의 정보이며
                이용자들의 PC 컴퓨터내의 하드디스크에 저장되기도 합니다.
                <s.OrderedList>
                  <s.ListItem>
                    쿠키의 사용 목적 : 이용자가 방문한 각 서비스와 웹 사이트들에 대한 방문 및 이용형태, 인기 검색어,
                    보안접속 여부, 등을 파악하여 이용자에게 최적화된 정보 제공을 위해 사용됩니다.
                  </s.ListItem>
                  <s.ListItem>
                    쿠키의 설치•운영 및 거부 : 웹브라우저 상단의 도구&gt;인터넷 옵션&gt;개인정보 메뉴의 옵션 설정을 통해
                    쿠키 저장을 거부 할 수 있습니다.
                  </s.ListItem>
                  <s.ListItem>쿠키 저장을 거부할 경우 맞춤형 서비스 이용에 어려움이 발생할 수 있습니다.</s.ListItem>
                </s.OrderedList>
              </s.ListItem>
            </s.DefaultList>
          </s.Description>
        </s.TermsSection>
        <s.TermsSection>
          <s.Title>제9조 (개인정보 보호책임자에 관한 사항)</s.Title>
          <s.Description>
            <s.DefaultList>
              <s.ListItem>
                ① 웹용 플래너 은(는) 개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리와 관련한 정보주체의
                불만처리 및 피해구제 등을 위하여 아래와 같이 개인정보 보호책임자를 지정하고 있습니다.
                <UnorderedList>
                  {`▶ 개인정보 보호책임자
성명 :김인서
직책 :기획자
직급 :프로젝트원
연락처 :
※ 개인정보 보호 담당부서로 연결됩니다.
▶ 개인정보 보호 담당부서
부서명 :백엔드
담당자 :김호진
연락처 :
`}
                </UnorderedList>
              </s.ListItem>
              <s.ListItem>
                ② 정보주체께서는 웹용 플래너 의 서비스(또는 사업)을 이용하시면서 발생한 모든 개인정보 보호 관련 문의,
                불만처리, 피해구제 등에 관한 사항을 개인정보 보호책임자 및 담당부서로 문의하실 수 있습니다. 웹용 플래너
                은(는) 정보주체의 문의에 대해 지체 없이 답변 및 처리해드릴 것입니다.
              </s.ListItem>
            </s.DefaultList>
          </s.Description>
        </s.TermsSection>
        <s.TermsSection>
          <s.Title>제10조(개인정보의 열람청구를 접수·처리하는 부서)</s.Title>
          <s.Description>
            정보주체는 ｢개인정보 보호법｣ 제35조에 따른 개인정보의 열람 청구를 아래의 부서에 할 수 있습니다.&lt; 웹용
            플래너 &gt;은(는) 정보주체의 개인정보 열람청구가 신속하게 처리되도록 노력하겠습니다.
            <s.OrderedList>
              <s.ListItem>
                ① 웹용 플래너 은(는) 개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리와 관련한 정보주체의
                불만처리 및 피해구제 등을 위하여 아래와 같이 개인정보 보호책임자를 지정하고 있습니다.
                <s.DefaultList>
                  {`▶ 개인정보 열람청구 접수·처리 부서 
                  부서명 : 백엔드 담당자 : 김호진 
                  연락처 : 
                  `}
                </s.DefaultList>
              </s.ListItem>
            </s.OrderedList>
          </s.Description>
        </s.TermsSection>
        <s.TermsSection>
          <s.Title>제11조(정보주체의 권익침해에 대한 구제방법)</s.Title>
          <s.Description>
            정보주체는 개인정보침해로 인한 구제를 받기 위하여 개인정보분쟁조정위원회, 한국인터넷진흥원
            개인정보침해신고센터 등에 분쟁해결이나 상담 등을 신청할 수 있습니다. 이 밖에 기타 개인정보침해의 신고,
            상담에 대하여는 아래의 기관에 문의하시기 바랍니다.1. 개인정보분쟁조정위원회 : (국번없이) 1833-6972
            (www.kopico.go.kr)2. 개인정보침해신고센터 : (국번없이) 118 (privacy.kisa.or.kr)3. 대검찰청 : (국번없이) 1301
            (www.spo.go.kr)4. 경찰청 : (국번없이) 182 (ecrm.cyber.go.kr)「개인정보보호법」제35조(개인정보의 열람),
            제36조(개인정보의 정정·삭제), 제37조(개인정보의 처리정지 등)의 규정에 의한 요구에 대 하여 공공기관의 장이
            행한 처분 또는 부작위로 인하여 권리 또는 이익의 침해를 받은 자는 행정심판법이 정하는 바에 따라 행정심판을
            청구할 수 있습니다.※ 행정심판에 대해 자세한 사항은 중앙행정심판위원회(www.simpan.go.kr) 홈페이지를
            참고하시기 바랍니다.
          </s.Description>
        </s.TermsSection>
        <s.TermsSection>
          <s.Title>제12조(개인정보 처리방침 변경)</s.Title>
          <s.Description>① 이 개인정보처리방침은 2023년 5월 1일부터 적용됩니다.</s.Description>
        </s.TermsSection>
      </s.TermsContainer>
    </s.PrivacyPolicy>
  )
}
