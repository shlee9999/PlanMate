import * as s from './styled'
import LogoSvg from 'assets/images/logo.svg'
//* 이용 약관 페이지

export const Tos = () => {
  return (
    <s.Tos>
      <s.PageHeader>
        <s.Logo src={LogoSvg} alt="logo_img" />
        <p>이용약관</p>
      </s.PageHeader>
      <s.TermsContainer>
        <s.TermsSection>
          <s.Title>제1조(목적)</s.Title>
          <s.Description>
            이 약관은 웹용플래너팀이 제공하는 다양한 서비스(웹용플래너 등을 포함하여 회사가 제공하는 다양한 서비스를
            의미하며 이하 &quot;서비스&quot;라 합니다)의 이용과 관련하여 회사와 이용자 간의 권리∙의무 및 필요한
            제반사항을 정함을 목적으로 합니다.
          </s.Description>
        </s.TermsSection>
        <s.TermsSection>
          <s.Title>제2조(용어의 정의)</s.Title>
          <s.Description>
            <s.ListTitle>이 약관에서 사용하는 용어의 정의는 다음과 같습니다.</s.ListTitle>
            <s.OrderedList>
              <s.ListItem>
                &quot;이용고객&quot;이란 회사가 제공하는 서비스를 이용하기 위해 웹페이지에 접속해 이용하는 자를
                말합니다.
              </s.ListItem>
              <s.ListItem>
                &quot;이용자&quot;란 이 약관 및 개인정보처리방침에 동의하고 회사가 제공하는 서비스 이용자격을 부여 받은
                이용고객을 말합니다.
              </s.ListItem>
              <s.ListItem>&quot;서비스&quot;란 회사가 제공하는 서비스 일체를 의미합니다.</s.ListItem>
              <s.ListItem>
                &quot;단말기&quot;란 서비스를 이용할 수 있는 휴대폰, 스마트폰, 태블릿 등 유무선 기기를 말합니다.
              </s.ListItem>
              <s.ListItem>
                &quot;이용자 계정&quot;이란 이용자의 식별과 서비스 이용을 위하여 이용자가 선정하고 플랫폼사업자가
                부여하는 문자, 숫자 또는 특수문자의 조합을 의미합니다.
              </s.ListItem>
              <s.ListItem>
                &quot;콘텐츠&quot;란 회사가 서비스에서 이용할 수 있도록 제작한 아이템 등을 말합니다.
              </s.ListItem>
              <s.ListItem>
                “이용자 콘텐츠”란 이용자가 서비스를 이용하는 과정에서 생성한 모든 종류의 데이터로, 커뮤니티에 작성하는
                글과 댓글, 채팅, 닉네임, 프로필, 상태메시지를 모두 포함합니다.
              </s.ListItem>
              <s.ListItem>
                &quot;유료콘텐츠&quot;란 이용자가 서비스를 이용함에 있어 특정한 효과 또는 효능을 향유하기 위하여
                In-App결제를 통해 구매하는 콘텐츠를 의미합니다.
              </s.ListItem>
              <s.ListItem>
                &quot;무료콘텐츠&quot;란 이용자가 서비스에서 직접 유료로 구매하지 않고, 다른 이용자로부터 선물받거나
                서비스를 이용하면서 무료로 취득한 콘텐츠를 의미합니다.
              </s.ListItem>
            </s.OrderedList>
          </s.Description>
        </s.TermsSection>
        <s.TermsSection>
          <s.Title>제3조(회사정보 등의 제공)</s.Title>
          <s.Description>
            <s.ListTitle>
              회사는 다음 각호의 사항을 서비스 초기화면이나 회사의 웹사이트에 게시하여 이용자가 이를 쉽게 알 수 있도록
              합니다. 다만, 이 약관 및 개인정보처리방침은 이용자가 연결화면을 통하여 볼 수 있도록 할 수 있습니다.
            </s.ListTitle>
            <s.OrderedList>
              <s.ListItem>상호 및 대표자의 성명</s.ListItem>
              <s.ListItem>전화번호</s.ListItem>
              <s.ListItem>개인정보처리방침</s.ListItem>
              <s.ListItem>서비스이용약관</s.ListItem>
            </s.OrderedList>
          </s.Description>
        </s.TermsSection>
        <s.TermsSection>
          <s.Title>제4조(약관의 효력 및 변경)</s.Title>
          <s.Description>
            <s.OrderedList>
              <s.ListItem>
                회사는 이 약관을 이용자가 알 수 있도록 회사의 웹사이트 게시하거나 서비스 이용을 위한 웹페이지 연결화면
                등을 통해 이용자에게 공지 함으로써 효력이 발생합니다.
              </s.ListItem>
              <s.ListItem>
                회사는 관련 법령의 변경이나 이용자의 권리 및 의무사항을 개선하기 위해 「전자상거래 등에서의 소비자보호에
                관한 법률」, 「약관의 규제에 관한 법률」, 「정보통신망이용촉진 및 정보보호 등에 관한 법률」,
                「콘텐츠산업진흥법」 등 관련 법령에 위배하지 않는 범위에서 이 약관을 변경할 수 있으며, 변경된 약관은
                적용일자 및 변경내용, 변경사유 등을 명시하여 그 적용일 7일 이전부터 그 적용일자 경과 후 일정기간이
                경과할 때까지 회사 웹사이트를 통해 이용자에게 공지합니다.
              </s.ListItem>
              <s.ListItem>
                이용자는 변경되는 약관에 대해 동의하지 않을 수 있으며, 변경되는 약관에 동의하지 않는 경우에는 서비스
                이용을 중단하고 서비스에서 탈퇴를 할 수 있습니다. 다만, 제2항의 방법으로 변경되는 약관의 공지 시
                이용자가 별도의 의사표시를 하지 않으면 승낙한 것으로 본다고 공지하였음에도 불구하고, 변경되는 약관의
                적용일 전일까지 회사에 대해 명시적으로 의사표시를 하지 아니하는 경우 또는 이용자가 변경되는 이용약관의
                적용일 이후에도 서비스를 계속 이용하는 경우에는 변경된 약관에 동의한 것으로 봅니다.
              </s.ListItem>
            </s.OrderedList>
          </s.Description>
        </s.TermsSection>
        <s.TermsSection>
          <s.Title>제5조(약관 외 준칙)</s.Title>
          <s.Description>
            이 약관에서 정하지 아니한 사항에 대해서는 관련법령 또는 회사가 정한 개별 서비스의 부속약관, 서비스별
            운영정책 및 규칙 등(이하 &apos;세부지침&apos;)의 규정에 따릅니다.
          </s.Description>
        </s.TermsSection>
        <s.TermsSection>
          <s.Title>제6조(이용 계약의 성립)</s.Title>
          <s.Description>
            <s.OrderedList>
              <s.ListItem>
                서비스 이용계약은 &quot;이용고객&quot;이 애플리케이션을 설치 및 구동하여 이 약관 및 개인정보처리방침에
                대한 동의하면 그 이용신청에 대한 회사의 이용승낙으로 성립합니다. 이용고객의 서비스 이용신청 완료 후
                단말기내에서 애플리케이션이 정상적으로 구동되는 경우에는 서비스 이용이 승낙된 것으로 간주됩니다.
              </s.ListItem>
              <s.ListItem>
                웹용플래너팀은 서비스 이용신청 또는 이용시 본인의 실제정보(이하 &quot;실명정보&quot;라 합니다)를
                기재하여야 합니다. 실명정보를 허위로 기재하거나 타인의 명의를 도용하는 경우 이 약관에 의한 이용자의
                권리를 주장할 수 없고, 회사는 이용계약을 취소하거나 해지할 수 있습니다. 이용자가 플랫폼사업자에게
                실명정보를 제공하고 플랫폼사업자를 통해 서비스를 이용하는 경우에도 동일하게 간주됩니다.
              </s.ListItem>
              <s.ListItem>
                웹용플래너팀은 다음 각 호의 어느 하나에 해당하는 이용신청에 대해서는 승낙을 하지 않을 수 있습니다.
                <s.UnorderedList>
                  <s.ListItem>콘텐츠 구매 대금을 납부하지 않거나 잘못 납부하여 확인할 수 없는 경우</s.ListItem>
                  <s.ListItem>개인 정보를 허위로 제공하는 경우</s.ListItem>
                  <s.ListItem>
                    최근 3개월 내 이용제한 기록이 있거나, 서비스 운영정책에 따라 서비스 이용제한(영구제한)을 받은
                    이용자가 이용신청을 하는 경우
                  </s.ListItem>
                  <s.ListItem>
                    제3자의 신용카드, 유/무선 전화, 은행 계좌 등을 무단으로 이용 또는 도용하여 콘텐츠를 구매하거나
                    이용한 경우
                  </s.ListItem>
                  <s.ListItem>
                    대한민국 이외의 국가 중 회사에서 아직 서비스를 제공할 것으로 결정하지 않은 국가에서 서비스를
                    이용하는 경우로 회사가 해외 서비스 업체와 체결한 계약이나 특정 국가에서 접속하는 회원에 대한 서비스
                    제공과 관련하여 서비스 제공을 제한할 필요가 있는 경우
                  </s.ListItem>
                  <s.ListItem>
                    「정보통신망 이용촉진 및 정보보호 등에 관한 법률」 및 그 밖의 관계 법령에서 금지하는 위법행위를 할
                    목적으로 이용신청을 하는 경우
                  </s.ListItem>
                  <s.ListItem>그 밖에 제1호 내지 제8호에 준하는 사유로서 승낙이 부적절하다고 판단되는 경우</s.ListItem>
                </s.UnorderedList>
              </s.ListItem>
            </s.OrderedList>
          </s.Description>
        </s.TermsSection>
        <s.TermsSection>
          <s.Title>제7조(이용자 계정 관리)</s.Title>
          <s.Description>
            <s.OrderedList>
              <s.ListItem>
                웹용플래너팀은 이용자 계정을 통하여 이용자의 서비스 이용가능 여부 등 제반 이용자 관리업무를 수행합니다.
              </s.ListItem>
              <s.ListItem>
                이용자는 자신의 이용자 계정을 선량한 관리자로서의 주의 의무를 다하여 관리하여야 합니다.웹용플래너팀은
                이용자가 자신의 이용자 계정을 소홀히 관리하거나 제3자에게 이용을 승낙함으로써 발생하는 손해에 대해
                어떠한 책임도 부담하지 않습니다.
              </s.ListItem>
            </s.OrderedList>
          </s.Description>
        </s.TermsSection>
        <s.TermsSection>
          <s.Title>제8조(개인정보의 보호 및 관리)</s.Title>
          <s.Description>
            <s.OrderedList>
              <s.ListItem>
                웹용플래너팀은 관련 법령이 정하는 바에 따라 이용자 계정을 포함한 이용자의 개인정보를 보호하기 위해
                노력합니다. 이용자의 개인정보 보호 및 사용에 대해서는 관련 법령 및 웹용플래너팀이 별도로 정하여 고지한
                개인정보처리방침에 따릅니다.
              </s.ListItem>
              <s.ListItem>
                웹용플래너팀의 웹사이트 또는 서비스에서 단순히 링크된 제3자 제공의 서비스에 대하여는 웹용플래너팀의
                개인정보처리방침이 적용되지 않습니다.
              </s.ListItem>
              <s.ListItem>
                웹용플래너팀은 이용자의 귀책사유로 인하여 노출된 이용자 계정을 포함한 이용자의 개인정보에 대해서 일체의
                책임을 지지 않습니다.
              </s.ListItem>
            </s.OrderedList>
          </s.Description>
        </s.TermsSection>
        <s.TermsSection>
          <s.Title>제9조(회사의 의무)</s.Title>
          <s.Description></s.Description>
        </s.TermsSection>
        <s.TermsSection>
          <s.Title>제10조(이용자의 의무)</s.Title>
          <s.Description>
            <s.OrderedList>
              <s.ListItem>
                이용자는 회사에서 제공하는 서비스를 서비스 본래의 이용 목적 이외의 용도로 사용하거나 아래에 해당하는
                이용자 콘텐츠를 작성하거나 관련된 행위를 하여서는 안됩니다.
                <s.UnorderedList>
                  <s.ListItem>
                    이용자 문의, 유료콘텐츠 복구 및 환불 요청, 이벤트 당첨 등으로 회사에 개인정보 제공 시 타인의
                    개인정보를 사용하거나, 허위 사실을 기재하는 행위
                  </s.ListItem>
                  <s.ListItem>
                    타인으로 가장하거나 타인과의 관계를 허위로 명시하는 행위, 다른 이용자의 계정정보를 도용 또는
                    부정하게 사용하거나, 타인의 신용카드, 유/무선 전화, 은행 계좌 등을 무단으로 도용하여 유료콘텐츠를
                    구매하는 행위
                  </s.ListItem>
                  <s.ListItem>
                    웹용플래너팀이 제공하지 않는 서비스를 통해 유료콘텐츠 등 콘텐츠를 타인과 거래하거나 매매하는 행위
                  </s.ListItem>
                  <s.ListItem>
                    웹용플래너팀의 서비스 또는웹사이트을 이용하여 얻은 정보를 사전 승낙 없이 복제, 유통, 조장하거나
                    상업적으로 이용 또는 알려지거나 알려지지 않은 버그를 악용하여 서비스를 이용하는 행위
                  </s.ListItem>
                  <s.ListItem>
                    웹용플래너팀의 서비스 또는 사이트를 이용하여 자기 또는 타인에게 재산상의 이익을 발생시키는 행위
                  </s.ListItem>
                  <s.ListItem>타인의 명예를 훼손하거나 손해를 가하는 행위</s.ListItem>
                  <s.ListItem>
                    약관이나 운영정책에 위반되지 않는 이용자 콘텐츠를 허위로 반복 신고하여 타인의 정상적인 서비스 이용을
                    방해하는 행위
                  </s.ListItem>
                  <s.ListItem>
                    웹용플래너팀의 지적재산권, 제3자의 지적재산권, 초상권 등 기타 권리를 침해하거나 회사의 승인을 받지
                    않고 다른 이용자의 개인정보를 수집, 저장, 유포, 게시하는 행위
                  </s.ListItem>
                  <s.ListItem>
                    제3자를 기망하여 이득을 취하거나 또는 회사가 제공하는 서비스를 불건전하게 이용하거나 이용하여
                    제3자에게 피해를 주는 행위
                  </s.ListItem>
                  <s.ListItem>
                    음란, 저속한 정보를 교류, 게재 또는 음란 사이트를 연결(링크)하거나 승인되지 않은 광고 또는 홍보물을
                    게재하는 행위
                  </s.ListItem>
                  <s.ListItem>재물을 걸고 도박하는 등 사행행위를 유도하거나 참여하는 행위</s.ListItem>
                  <s.ListItem>
                    수치심이나 혐오감 또는 공포심을 일으키는 말이나 음향, 글이나 화상 또는 영상을 상대방에게 전송, 도달,
                    유포하는 행위
                  </s.ListItem>
                  <s.ListItem>
                    관련 법령에 의하여 그 전송 또는 게시가 금지되는 정보(컴퓨터 프로그램) 또는 컴퓨터 소프트웨어,
                    하드웨어, 전기 통신 장비의 정상적인 가동을 방해, 파괴할 목적으로 고안된 소프트웨어 바이러스, 기타
                    다른 컴퓨터 코드, 파일, 프로그램을 포함하고 있는 자료를 전송, 게시, 유포, 사용하는 행위
                  </s.ListItem>
                  <s.ListItem>
                    웹용플래너팀으로부터 특별한 권리를 부여 받지 않고 애플리케이션을 변경하거나 애플리케이션에 다른
                    프로그램을 추가 또는 삽입하거나 서버를 해킹, 역설계하거나, 소스코드나 애플리케이션 데이터의 유출 및
                    변경, 별도의 서버를 구축하거나 웹사이트의 일부분을 임의로 변경 또는 도용하여 회사를 사칭하는 행위
                  </s.ListItem>
                  <s.ListItem>
                    웹용플래너팀의 직원이나 운영자를 가장하거나 사칭, 또는 타인의 명의를 도용하여 글을 게시하거나 메일을
                    발송하는 행위
                  </s.ListItem>
                  <s.ListItem>
                    웹용플래너팀의 동의없이 영리, 영업, 광고, 정치활동, 불법 선거운동 등을 목적으로 서비스를 사용하는
                    행위
                  </s.ListItem>
                  <s.ListItem>
                    기타 공공질서 및 미풍양속을 위반하거나 불법적, 부당한 행위 및 관련법령에 위배되는 행위
                  </s.ListItem>
                </s.UnorderedList>
              </s.ListItem>
              <s.ListItem>
                이용자는 웹용플래너팀의 웹사이트 내의 공지사항 및 이 약관 개정사항 등을 수시로 확인하고 준수할 의무가
                있으며, 기타 업무에 방해되는 행위를 하여서는 안 됩니다.
              </s.ListItem>
              <s.ListItem>
                이용자 계정에 관한 관리 책임은 이용자에게 있으며, 이를 제3자가 이용하도록 하여서는 안됩니다.
                웹용플래너팀이 방송통신위원회의 &quot;오픈 마켓 모바일 콘텐츠 결제 가이드라인&quot; 및 권고, 오픈 마켓
                사업자의 결제 정책을 모두 준수한 경우, 이용자는 제3자의 이용 및 결제를 이유로 회사에게 환급, 배상 등을
                청구할 수 없습니다.
              </s.ListItem>
              <s.ListItem>
                웹용플래너팀은 서비스 운영정책을 정하여 운영할 수 있으며, 이용자는 웹용플래너팀에서 정한 서비스
                운영정책을 준수하여 서비스를 이용하여야 합니다.
              </s.ListItem>
              <s.ListItem>
                웹용플래너팀은 서비스 운영정책을 수시로 변경할 수 있으며, 서비스 운영정책을 변경하는 경우에는 사전에
                공지합니다.
              </s.ListItem>
            </s.OrderedList>
          </s.Description>
        </s.TermsSection>
        <s.TermsSection>
          <s.Title>제11조 (서비스의 제공 시간 및 중지)</s.Title>
          <s.Description>
            <s.OrderedList>
              <s.ListItem>
                웹용플래너팀은 이용자의 서비스 이용을 승낙한 때부터 서비스를 개시합니다. 단, 일부 서비스의 경우 회사의
                필요에 따라 지정된 일자부터 서비스를 제공할 수 있습니다.
              </s.ListItem>
              <s.ListItem>
                웹용플래너팀은 업무상 또는 기술상 특별한 지장이 없는 한 연중무휴 1일 24시간 서비스를 제공합니다. 다만,
                시스템 정기점검, 서버의 증설 및 교체, 새로운 서비스 내용의 추가, 각종 버그 패치, 새로운 서비스로의 교체
                등 운영상 필요한 경우, 일정기간 동안 서비스 이용을 일시 중단할 수 있습니다. 이러한 경우 회사는 그 내용
                및 시간을 회사의 웹사이트 등에 사전에 공지 하지만, 회사가 사전에 통지할 수 없는 부득이한 사유가 있는
                경우 사후에 공지할 수 있습니다.
              </s.ListItem>
            </s.OrderedList>
          </s.Description>
        </s.TermsSection>
        <s.TermsSection>
          <s.Title>제12조(서비스 내용 및 변경)</s.Title>
          <s.Description>
            <s.OrderedList>
              <s.ListItem>
                이용자는 이 약관 및 서비스 운영정책 또는 이용규칙에 따라 서비스를 이용하여야 합니다.
              </s.ListItem>
              <s.ListItem>
                웹용플래너팀은 서비스의 제작, 변경, 유지, 보수, 종료 등 서비스에 관한 포괄적인 권한을 가집니다.
              </s.ListItem>
              <s.ListItem>
                웹용플래너팀은 새로운 서비스 내용, 각종 버그 패치 등 서비스의 운영상 또는 기술상 필요한 경우 제공하고
                있는 서비스의 전부 또는 일부를 상시적으로 수정, 추가, 폐지 등 변경할 수 있습니다. 변경되는 서비스의 내용
                및 제공일자 등에 대해서는 회사 웹사이트 등을 통해 별도로 공지합니다.
              </s.ListItem>
              <s.ListItem>
                웹용플래너팀은 아래에 해당하는 경우 서비스의 전부 또는 일부를 제한하거나 중지할 수 있습니다.
                <s.UnorderedList>
                  <s.ListItem>전시, 사변, 천재지변 또는 국가비상사태 등 불가항력적인 사유가 있는 경우</s.ListItem>
                  <s.ListItem>
                    정전, 제반 설비의 장애 또는 이용량의 폭주 등으로 정상적인 서비스 이용에 지장이 있는 경우
                  </s.ListItem>
                  <s.ListItem>서비스용 설비의 보수 등 공사로 인한 부득이한 경우</s.ListItem>
                  <s.ListItem>기타 회사의 제반 사정으로 서비스를 할 수 없는 경우</s.ListItem>
                </s.UnorderedList>
              </s.ListItem>
              <s.ListItem>
                웹용플래너팀은 서비스가 변경되거나 정지된 원인이 회사의 고의 또는 중과실로 인한 경우를 제외하고는
                서비스의 변경 및 중지로 발생하는 문제에 대해서 책임을 지지 않습니다.
              </s.ListItem>
            </s.OrderedList>
          </s.Description>
        </s.TermsSection>
        <s.TermsSection>
          <s.Title>제13조(정보의 제공 및 게재)</s.Title>
          <s.Description>
            <s.OrderedList>
              <s.ListItem>
                회사는 플랫폼사업자 및/또는 앱스토어사업자를 통해 제공받은 이용자 정보를 사용하거나 이용자에게
                추가정보를 요청할 수 있으며, 수집 또는 제공받은 이용자 정보에 대해서는 개인정보처리방침에서 정한
                목적외로 이용하지 않습니다. 또한, 이용자는 플랫폼사업자 및/또는 앱스토어 사업자를 통해 이용자 정보 또는
                추가정보의 제공을 거절할 수 있습니다.
              </s.ListItem>
              <s.ListItem>
                회사는 서비스에 광고를 게재할 수 있으며, 이용자는 서비스 이용시 노출되는 광고게재에 대하여 동의합니다.
              </s.ListItem>
              <s.ListItem>
                회사는 이용자가 제2항의 광고에 참여하거나 교신 또는 거래를 함으로써 발생하는 손실 또는 손해에 대해
                회사는 어떠한 책임도 부담하지 않습니다.
              </s.ListItem>
              <s.ListItem>
                회사는 단말기 알림(Push 알림) 등을 활용하여 이용자에게 제2항의 광고를 발송할 수 있으며, 이용자가 원하지
                않는 경우에는 언제든지 수신을 거부할 수 있습니다.
              </s.ListItem>
            </s.OrderedList>
          </s.Description>
        </s.TermsSection>
        <s.TermsSection>
          <s.Title>제14조(계약 해지 및 서비스 이용 중지 등)</s.Title>
          <s.Description>
            <s.OrderedList>
              <s.ListItem>
                이용자는 언제든지 서비스의 이용을 원하지 않는 경우, 서비스내 탈퇴를 통하여 이용계약을 해지할 수
                있습니다.
              </s.ListItem>
              <s.ListItem>
                이용자가 서비스 탈퇴를 신청하는 경우, 탈퇴 신청 후 2주간 서비스를 이용할 수 없으며, 이용자가 보유한
                콘텐츠 정보(서비스 이용기록 포함)는 모두 삭제됩니다.
              </s.ListItem>
              <s.ListItem>
                회사는 이용자가 제10조 또는 서비스 운영정책에서 정한 사항을 위반하는 경우 이용계약을 해지하거나 기간을
                정하여 서비스 이용을 제한할 수 있습니다.
              </s.ListItem>
              <s.ListItem>
                이용자는 제3항에 따른 서비스 이용제한에 대해 회사가 정한 절차에 따라 이의신청을 할 수 있으며, 회사는
                이용자의 이의신청이 정당하다고 판단되는 경우 즉시 서비스 이용을 재개합니다.
              </s.ListItem>
              <s.ListItem>
                회사는 제3항에 따른 서비스 이용에 제한이 정당한 경우 서비스 이용제한으로 인하여 이용자가 입은 손해를
                배상할 책임을 부담하지 않습니다.
              </s.ListItem>
            </s.OrderedList>
          </s.Description>
        </s.TermsSection>
        <s.TermsSection>
          <s.Title>제15조(잠정조치로서의 이용제한)</s.Title>
          <s.Description>
            <s.OrderedList>
              <s.ListItem>
                회사는 아래에 해당하는 문제에 대한 조사가 완료될 때까지 이용자의 서비스 이용을 중지할 수 있습니다.
                <s.UnorderedList>
                  <s.ListItem>이용자 계정이 해킹 또는 도용당하였다는 정당한 신고가 접수된 경우</s.ListItem>
                  <s.ListItem>불법프로그램 사용자, 작업장 등 위법행위자로 합리적으로 의심되는 경우</s.ListItem>
                  <s.ListItem>그 밖에 위 각호에 준하는 사유로 계정의 잠정조치가 필요한 경우</s.ListItem>
                </s.UnorderedList>
              </s.ListItem>
              <s.ListItem>
                제1항의 경우 회사는 조사가 완료된 후 서비스 이용기간에 비례하여 유료콘텐츠의 이용기간을 연장합니다.
                다만, 제1항에 의한 위법행위자로 판명된 경우에는 그러하지 아니합니다.
              </s.ListItem>
            </s.OrderedList>
          </s.Description>
        </s.TermsSection>
        <s.TermsSection>
          <s.Title>제16조(손해배상)</s.Title>
          <s.Description>
            <s.OrderedList>
              <s.ListItem>
                이용자는 이 약관의 의무를 위반함으로 인하여 회사에 손해를 입힌 경우 또는 이용자가 서비스를 이용하는
                과정에서 회사에 손해를 입힌 경우 회사에 대하여 그 손해를 배상하여야 합니다.
              </s.ListItem>
              <s.ListItem>
                이용자는 서비스 이용과정에서 행한 불법행위나 이 약관 위반행위로 인하여 회사가 이용자 이외의 제3자로부터
                손해배상 청구 또는 소송을 비롯한 각종 이의제기를 받는 경우, 자신의 책임과 비용으로 회사를 면책시켜야
                하며, 회사가 면책되지 못한 경우 그로 인하여 회사에 발생한 손해를 배상할 책임을 부담합니다.
              </s.ListItem>
            </s.OrderedList>
          </s.Description>
        </s.TermsSection>
        <s.TermsSection>
          <s.Title>제17조(면책)</s.Title>
          <s.Description>
            <s.OrderedList>
              <s.ListItem>
                웹용플래너팀은 전시, 사변, 천재지변, 국가비상사태, 해결이 곤란한 기술적 결함 기타 불가항력적 사유로
                서비스를 제공할 수 없는 경우에는 그 책임이 면제됩니다.
              </s.ListItem>
              <s.ListItem>
                웹용플래너팀은 이용자의 귀책사유로 인한 서비스의 중지/이용장애에 대하여 책임을 지지 아니하며,
                웹용플래너팀은 기간통신사업자가 전기통신서비스를 중지하거나 정상적으로 제공하지 아니하여 이용자에게
                손해가 발생한 경우에는 책임이 면제됩니다.
              </s.ListItem>
              <s.ListItem>
                웹용플래너팀은 사전에 공지되거나 긴급하게 실시된 서비스용 설비의 보수, 교체, 정기점검, 공사 등 부득이한
                사유로 서비스가 중지되거나 장애가 발생한 경우에 대해서는 그 책임이 면제됩니다.
              </s.ListItem>
              <s.ListItem>
                웹용플래너팀은 이용자가 서비스를 이용하여 기대하는 점수, 순위 등을 얻지 못한 것에 대하여 책임을 지지
                않으며, 서비스에 대한 취사 선택 또는 이용으로 발생하는 손해 등에 대해서는 책임이 면제됩니다.
              </s.ListItem>
              <s.ListItem>
                웹용플래너팀은 이용자가 본인의 개인정보 등(이용자 계정 포함)을 변경하여 얻는 불이익 및 정보상실에
                대해서는 일체 책임을 지지 않습니다.
              </s.ListItem>
              <s.ListItem>
                웹용플래너팀은 이용자의 단말기 환경으로 인하여 발생하는 제반문제 또는 회사의 귀책사유가 없는 네트워크
                환경으로 인하여 발생하는 문제에 대해서 책임을 지지 않습니다.
              </s.ListItem>
              <s.ListItem>
                웹용플래너팀은 이용자 상호간 또는 이용자와 제3자 간에 서비스를 매개로 발생한 분쟁에 대해 개입할 의무가
                없으며 이로 인한 손해를 배상할 책임도 없습니다.
              </s.ListItem>
              <s.ListItem>
                웹용플래너팀은 제공하는 서비스 중 무료 서비스 및 콘텐츠의 경우에는 손해배상의 대상에서 제외됩니다. 다만,
                웹용플래너팀의 고의 또는 중대한 과실로 인하여 발생한 손해의 경우는 제외합니다.
              </s.ListItem>
            </s.OrderedList>
          </s.Description>
        </s.TermsSection>
        <s.TermsSection>
          <s.Title>제18조(저작권 등의 귀속)</s.Title>
          <s.Description>
            <s.OrderedList>
              <s.ListItem>콘텐츠에 대한 저작권 기타 지적재산권은 웹용플래너팀의 소유입니다.</s.ListItem>
              <s.ListItem>
                이용자는 웹용플래너팀이 제공하는 서비스를 이용함으로써 얻은 정보 중 웹용플래너팀 또는 제공업체의
                지적재산권이 귀속된 정보를 웹용플래너팀 또는 제공업체의 사전승낙 없이 복제, 전송, 출판, 배포, 방송 기타
                방법에 의하여 영리목적으로 이용하거나 제3자에게 이용하게 하여서는 안 됩니다.
              </s.ListItem>
              <s.ListItem>
                이용자는 서비스에서 보여지거나 서비스와 관련하여 이용자 또는 다른 이용자가 서비스를 통해 업로드 또는
                전송하는 대화 텍스트를 포함한 커뮤니케이션, 이미지, 사운드 및 모든 자료 및 정보(이하 &quot;이용자
                콘텐츠&quot;라 합니다)를 웹용플래너팀이 이용기간과 지역에 제한 없이 아래와 같은 방법으로 이용하는 것을
                허락합니다. 다만, 웹용플래너팀은 이용자 콘텐츠를 제작한 이용자의 사전 동의 없이는 해당 이용자 콘텐츠를
                판매, 대여 또는 양도할 수 없습니다.
                <s.UnorderedList>
                  <s.ListItem>이용자 콘텐츠의 공표, 복제, 공연, 전송, 배포, 방송 등으로 이용</s.ListItem>
                  <s.ListItem>이용자 콘텐츠의 편집, 변경, 2차적 저작물 작성 등의 방법으로 의용</s.ListItem>
                </s.UnorderedList>
              </s.ListItem>

              <s.ListItem>
                웹용플래너팀은 이용자가 게시하거나 등록하는 서비스 내의 게시물, 게시 내용이 제10조에서 규정하는
                금지행위에 해당된다고 판단되는 경우, 사전통지 없이 이를 삭제하거나 이동 또는 등록을 거부할 수 있습니다.
              </s.ListItem>
              <s.ListItem>
                웹용플래너팀이 운영하는 게시판 등에 게시된 정보로 인하여 법률상 이익이 침해된 이용자는 회사에게 당해
                정보의 삭제 또는 반박내용의 게재를 요청할 수 있습니다. 이 경우 웹용플래너팀은 신속하게 필요한 조치를
                취하고, 이를 신청인에게 통지합니다.
              </s.ListItem>
              <s.ListItem>
                제3항은 회사가 서비스를 운영하는 동안 유효하며 회원탈퇴 후에도 지속적으로 적용됩니다.
              </s.ListItem>
            </s.OrderedList>
          </s.Description>
        </s.TermsSection>
        <s.TermsSection>
          <s.Title>제19조(재판권 및 준거법)</s.Title>
          <s.Description>
            <s.OrderedList>
              <s.ListItem>
                서비스 이용과 관련하여 회사와 이용자간에 발생한 분쟁에 관한 소송은 민사소송법 등 관련법령에서 정한
                절차에 따른 법원을 관할법원으로 합니다.
              </s.ListItem>
              <s.ListItem>회사와 이용자간에 제기된 소송에는 대한민국 법을 적용합니다.</s.ListItem>
            </s.OrderedList>
          </s.Description>
        </s.TermsSection>
      </s.TermsContainer>
    </s.Tos>
  )
}
