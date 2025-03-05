import { Client } from "../models/Client.js"
import { Job } from "../models/Job.js"
import { ClientExecutive } from "../models/ClientExecutive.js"
import { CompanyTeam } from "../models/CompanyTeam.js"
import { TeamMember } from "../models/TeamMember.js"
import { OnboardingTemplate } from "../models/OnboardingTemplate.js"
import { Onboarding } from "../models/Onboarding.js"
import { WorkflowMaster } from "../models/WorkflowMaster.js"
import { Referral } from "../models/Referral.js"
import { TeamMemberPermission } from "../models/TeamMemberPermission.js"
import { Interview } from "../models/Interview.js"
import { Operation } from "../models/Operation.js"
// import { OperationLog } from "../models/OperationLog.js"
import { Application } from "../models/Application.js"
import { OnboardingTask } from "../models/OnboardingTask.js"
import { Feedback } from "../models/Feedback.js"
import { Analytics } from "../models/Analytics.js"
import { Applicant } from "../models/Applicant.js"
import { ApplicantSkill } from "../models/ApplicantSkill.js"
import { ApplicationStageHistory } from "../models/ApplicationStageHistory.js"
import { Communication } from "../models/Communication.js"
import { Document } from "../models/Document.js"
import { DocumentContent } from "../models/DocumentContent.js"
import { FeedbackCriteria } from "../models/FeedbackCriteria.js"
import { Integration } from "../models/Integration.js"
import { InterviewNote } from "../models/InterviewNote.js"
import { JobExternalPosting } from "../models/JobExternalPosting.js"
import { JobPreference } from "../models/JobPreference.js"
import { JobSkill } from "../models/JobSkill.js"
import { OnboardingTemplateStructure } from "../models/OnboardingTemplateStructure.js"
import { ResumeSection } from "../models/ResumeSection.js"
import { Score } from "../models/Score.js"
import { Skill } from "../models/Skill.js"
import { Workflow } from "../models/Workflow.js"
import { WorkflowAutomation } from "../models/WorkflowAutomation.js"
import { ScoreDetail } from "../models/ScoreDetail.js"
import { OnboardingProgress } from "../models/OnboardingProgress.js"
import { ApplicantTag } from "../models/ApplicantTag.js"
import { Tag } from "../models/Tag.js"
import { Calendar } from "../models/Calendar.js"
import { EmailTemplate } from "../models/EmailTemplate.js"
import { Notification } from "../models/Notification.js"
import { Report } from "../models/Report.js"
import { Setting } from "../models/Setting.js"
import { User } from "../models/User.js"
import { UserActivity } from "../models/UserActivity.js"

export const SetupAssociations = () => {

    //Client Associations
    Client.hasMany(Job, {
        foreignKey: "clientId",
    })
    Client.hasMany(ClientExecutive, {
        foreignKey: "clientId",
    })
    Client.hasMany(OnboardingTemplate, {
        foreignKey: "clientId",
    })
    Client.hasMany(WorkflowMaster, {
        foreignKey: "clientId",
    })
    Client.hasMany(Tag, {
        foreignKey: "clientId",
    })
    Client.hasMany(EmailTemplate, {
        foreignKey: "clientId",
    })
    Client.hasMany(Report, {
        foreignKey: "clientId",
    })
    Client.hasMany(Setting, {
        foreignKey: "clientId",
    })

    //Job Associations
    Job.belongsTo(Client, {
        foreignKey: "clientId",
    })
    Job.hasMany(Application, {
        foreignKey: "jobId",
    })
    Job.hasMany(JobSkill, {
        foreignKey: "jobId",
    })
    Job.hasMany(JobPreference, {
        foreignKey: "jobId",
    })
    Job.hasMany(JobExternalPosting, {
        foreignKey: "jobId",
    })
    Job.hasMany(Analytics, {
        foreignKey: "entityId",
        constraints: false,
    })
    Job.hasMany(Integration, {
        foreignKey: "jobId",
    })
    //JobPreference Associations
    JobPreference.belongsTo(Job, {
        foreignKey: "jobId",
    })
    //JobSkill Associations 
    JobSkill.belongsTo(Job, {
        foreignKey: "jobId",
    })
    JobSkill.belongsTo(Skill, {
        foreignKey: "skillId",
    })
    //Application Associations
    Application.hasMany(Interview, {
        foreignKey: "applicationId",
    })
    Application.belongsTo(Applicant, {
        foreignKey: "applicantId",
    })
    Application.belongsTo(Job, {
        foreignKey: "jobId",
    })
    Application.belongsTo(TeamMember, {
        foreignKey: "teamMemberId",
    })
    Application.belongsTo(Workflow, {
        foreignKey: "workflowId",
    })
    Application.hasMany(Score, {
        foreignKey: "applicationId",
    })
    Application.hasMany(Communication, {
        foreignKey: "applicationId",
    })
    Application.hasOne(Onboarding, {
        foreignKey: "applicationId",
    })
    Application.hasMany(ApplicationStageHistory, {
        foreignKey: "applicationId",
    })
    Application.hasMany(Analytics, {
        foreignKey: "entityId",
    })
    // ClientExecutive Associations
    ClientExecutive.belongsTo(Client, {
        foreignKey: "clientId",
    })
    ClientExecutive.hasMany(Referral, {
        foreignKey: "clientExecutiveId",
    })
    //JobExternalPosting Associations
    JobExternalPosting.belongsTo(Job, {
        foreignKey: "jobId",
    })
    //OnboardingTemplate Associationa
    OnboardingTemplate.belongsTo(Client, {
        foreignKey: "clientId",
    })
    OnboardingTemplate.hasMany(Onboarding, {
        foreignKey: "onboardingTemplateId",
    })
    OnboardingTemplate.hasOne(OnboardingTemplateStructure, {
        foreignKey: "onboardingTemplateId",
    })

    //WorkflowMaster Associations 
    WorkflowMaster.belongsTo(Client, {
        foreignKey: "clientId",
    })
    WorkflowMaster.hasMany(Workflow, {
        foreignKey: "workflowMasterId",
    })

    //CompanyTeam Associations
    // CompanyTeam.belongsTo(Client, {
    //     foreignKey: "clientId",
    // })
    CompanyTeam.hasMany(TeamMember, {
        foreignKey: "companyTeamId",
    })


    //Communication Associations
    Communication.belongsTo(Application, {
        foreignKey: "applicationId",
    })

    //TeamMember Associations
    TeamMember.belongsTo(CompanyTeam, {
        foreignKey: "companyTeamId",
    })
    TeamMember.hasMany(TeamMemberPermission, {
        foreignKey: "teamMemberId",
    })
    TeamMember.hasMany(Operation, {
        foreignKey: "teamMemberId",
    })
    TeamMember.hasMany(Application, {
        foreignKey: "teamMemberId",
    })
    TeamMember.hasMany(Interview, {
        foreignKey: "interviewerId",
    })
    TeamMember.hasMany(Feedback, {
        foreignKey: "teamMemberId",
    })
    TeamMember.hasMany(OnboardingTask, {
        foreignKey: "assignedTo",
    })
    TeamMember.hasMany(Onboarding, {
        foreignKey: "assignedBuddyId",
    })

    //TeamMemberPermissions Associations
    TeamMemberPermission.belongsTo(TeamMember, {
        foreignKey: "teamMemberId",
    })

    //Operation Associations
    Operation.belongsTo(TeamMember, {
        foreignKey: "teamMemberId",
    })

    // //OperationLog Associations
    // OperationLog.belongsTo(Operation, {
    //     foreignKey: "operationId",
    // })

    //Applicant Associations
    Applicant.hasMany(Application, {
        foreignKey: "applicantId",
    })
    Applicant.hasMany(ApplicantSkill, {
        foreignKey: "applicantId",
    })
    Applicant.hasMany(Document, {
        foreignKey: "applicantId",
    })
    Applicant.hasMany(Referral, {
        foreignKey: "applicantId",
    })
    Applicant.hasMany(Onboarding, {
        foreignKey: "applicantId",
    })
    Applicant.hasMany(Analytics, {
        foreignKey: "entityId",
    })
    Applicant.hasMany(Integration, {
        foreignKey: "applicantId",
    })
    Applicant.hasMany(ApplicantTag, {
        foreignKey: "applicantId",
    })

    //Tag Associations
    Tag.hasMany(ApplicantTag, {
        foreignKey: "tagId",
    })
    Tag.belongsTo(Client, {
        foreignKey: "clientId",
    })

    //ApplicantTag Associations
    ApplicantTag.belongsTo(Applicant, {
        foreignKey: "applicantId",
    })
    ApplicantTag.belongsTo(Tag, {
        foreignKey: "tagId",
    })

    //Calendar Associations
    Calendar.belongsTo(TeamMember, {
        foreignKey: "teamMemberId",
    })

    //Notification Associations
    Notification.belongsTo(TeamMember, {
        foreignKey: "teamMemberId",
    })

    //EmailTemplate Associations
    EmailTemplate.belongsTo(Client, {
        foreignKey: "clientId",
    })

    //Report Associations
    Report.belongsTo(Client, {
        foreignKey: "clientId",
    })

    //UserActivity Associaitions
    UserActivity.belongsTo(TeamMember, {
        foreignKey: "teamMemberId",
    })

    //Setting Associations
    Setting.belongsTo(Client, {
        foreignKey: "clientId",
    })

    //Interview Associations
    Interview.belongsTo(Application, {
        foreignKey: "applicationId",
    })
    Interview.belongsTo(TeamMember, {
        foreignKey: "interviewerId",
    })
    Interview.hasMany(Feedback, {
        foreignKey: "interviewId",
    })
    Interview.hasMany(InterviewNote, {
        foreignKey: "interviewId",
    })

    //InterviewNote Associations
    InterviewNote.belongsTo(Interview, {
        foreignKey: "interviewId",
    })



    //Onboarding Associations
    Onboarding.belongsTo(Applicant, {
        foreignKey: "applicantId",
    })
    Onboarding.belongsTo(Application, {
        foreignKey: "applicationId",
    })
    Onboarding.belongsTo(OnboardingTemplate, {
        foreignKey: "onboardingTemplateId",
    })
    Onboarding.belongsTo(TeamMember, {
        foreignKey: "assignedBuddyId",
    })
    Onboarding.hasMany(OnboardingTask, {
        foreignKey: "onboardingId",
    })
    Onboarding.hasOne(OnboardingProgress, {
        foreignKey: "onboardingId",
    })

    //Analytics Association
    Analytics.belongsTo(Job, {
        foreignKey: "entityId",

    })
    Analytics.belongsTo(Applicant, {
        foreignKey: "entityId",
    })
    Analytics.belongsTo(Application, {
        foreignKey: "entityId",
    })
    Analytics.belongsTo(Skill, {
        foreignKey: "entityId",
    })


    //Interview Associations
    Interview.belongsTo(Application, {
        foreignKey: "applicationId",
    })
    Interview.belongsTo(TeamMember, {
        foreignKey: "interviewerId",
    })
    Interview.hasMany(Feedback, {
        foreignKey: "interviewId",
    })
    Interview.hasMany(InterviewNote, {
        foreignKey: "interviewId",
    })

    //ApplicantSkill Associations
    ApplicantSkill.belongsTo(Applicant, {
        foreignKey: "applicantId",
    })
    ApplicantSkill.belongsTo(Skill, {
        foreignKey: "skillId",
    })

    //ApplicationStageHistory Associations
    ApplicationStageHistory.belongsTo(Application, {
        foreignKey: "applicationId",
        onDelete: "SET NULL",
    })

    //OnboardingTemplateStructure Associations
    OnboardingTemplateStructure.belongsTo(OnboardingTemplate, {
        foreignKey: "onboardingTemplateId",
    })
    //OnboardingTask Associations
    OnboardingTask.belongsTo(Onboarding, {
        foreignKey: "onboardingId",
    })
    OnboardingTask.belongsTo(TeamMember, {
        foreignKey: "assignedTo",
    })
    //OnboardingProgress Associations 
    OnboardingProgress.belongsTo(Onboarding, {
        foreignKey: "onboardingId",
    })


    //Workflow Associations
    Workflow.belongsTo(WorkflowMaster, {
        foreignKey: "workflowMasterId",
    })
    Workflow.hasMany(Application, {
        foreignKey: "workflowId",
    })
    Workflow.hasMany(WorkflowAutomation, {
        foreignKey: "workflowId",
    })

    //WorkflowAutomation Associations 
    WorkflowAutomation.belongsTo(Workflow, {
        foreignKey: "workflowId",
    })

    //Skill Associations
    Skill.hasMany(JobSkill, {
        foreignKey: "skillId",
    })
    Skill.hasMany(ApplicantSkill, {
        foreignKey: "skillId",
    })
    Skill.hasMany(Analytics, {
        foreignKey: "entityId",
        constraints: false,
    })

    //Score Associations
    Score.belongsTo(Application, {
        foreignKey: "applicationId",
    })
    Score.hasMany(ScoreDetail, {
        foreignKey: "scoreId",
    })

    //ScoreDetail Associations
    ScoreDetail.belongsTo(Score, {
        foreignKey: "scoreId",
    })

    //ResumeSection Associations
    ResumeSection.belongsTo(Document, {
        foreignKey: "documentId",
    })

    //Referral Associations
    Referral.belongsTo(Applicant, {
        foreignKey: "applicantId",
    })
    Referral.belongsTo(ClientExecutive, {
        foreignKey: "clientExecutiveId",
    })

    //Integration  Associations
    Integration.belongsTo(Job, {
        foreignKey: "jobId",
    })
    Integration.belongsTo(Applicant, {
        foreignKey: "applicantId",
    })

    //Feedback Associations
    Feedback.belongsTo(Interview, {
        foreignKey: "interviewId",
    })
    Feedback.belongsTo(TeamMember, {
        foreignKey: "teamMemberId",
    })
    Feedback.hasMany(FeedbackCriteria, {
        foreignKey: "feedbackId",
    })

    //FeedbackCriteria Associations
    FeedbackCriteria.belongsTo(Feedback, {
        foreignKey: "feedbackId",
    })

    //Document Associations 
    Document.belongsTo(Applicant, {
        foreignKey: "applicantId",
    })
    Document.hasOne(DocumentContent, {
        foreignKey: "documentId",
    })
    Document.hasMany(ResumeSection, {
        foreignKey: "documentId",
    })

    //DocumentContent Associations
    DocumentContent.belongsTo(Document, {
        foreignKey: "documentId",
    })

    //User Associations
    User.hasOne(TeamMember, {
        foreignKey: "userId",
    })

    TeamMember.belongsTo(User, {
        foreignKey: "userId",
    })

    // User activity tracking
    User.hasMany(UserActivity, {
        foreignKey: "userId",
    })

    UserActivity.belongsTo(User, {
        foreignKey: "userId",
    })

    User.hasMany(Notification, {
        foreignKey: "userId",
    })

    Notification.belongsTo(User, {
        foreignKey: "userId",
    })

    // Audit trail - Created By relationships
    User.hasMany(OnboardingTemplate, {
        foreignKey: "createdBy",
    })

    OnboardingTemplate.belongsTo(User, {
        foreignKey: "createdBy",
    })

    // Audit trail - Modified By relationships
    User.hasMany(OnboardingTemplate, {
        foreignKey: "lastmodifiedBy",
    })

    OnboardingTemplate.belongsTo(User, {
        foreignKey: "lastmodifiedBy",
    })

    // Similar pattern for other audit trail relationships
    // Reports
    User.hasMany(Report, {
        foreignKey: "createdBy",
    })

    Report.belongsTo(User, {
        foreignKey: "createdBy",
    })

    User.hasMany(Report, {
        foreignKey: "lastmodifiedBy",
    })

    Report.belongsTo(User, {
        foreignKey: "lastmodifiedBy",
    })

    // WorkflowMaster
    User.hasMany(WorkflowMaster, {
        foreignKey: "createdBy"
    })

    WorkflowMaster.belongsTo(User, {
        foreignKey: "createdBy",
    })

    User.hasMany(WorkflowMaster, {
        foreignKey: "lastmodifiedBy",
    })

    WorkflowMaster.belongsTo(User, {
        foreignKey: "lastmodifiedBy",
    })

    // EmailTemplate associations
    User.hasMany(EmailTemplate, {
        foreignKey: "createdBy",
    })

    EmailTemplate.belongsTo(User, {
        foreignKey: "createdBy",
    })

    User.hasMany(EmailTemplate, {
        foreignKey: "lastmodifiedBy",
    })

    EmailTemplate.belongsTo(User, {
        foreignKey: "lastmodifiedBy",
    })

    // Setting associations
    User.hasMany(Setting, {
        foreignKey: "createdBy",
    })

    Setting.belongsTo(User, {
        foreignKey: "createdBy",
    })

    User.hasMany(Setting, {
        foreignKey: "lastmodifiedBy",
    })

    Setting.belongsTo(User, {
        foreignKey: "lastmodifiedBy",
    })

    // Operation tracking
    User.hasMany(Operation, {
        foreignKey: "performedBy",
    })

    Operation.belongsTo(User, {
        foreignKey: "performedBy",
    })

    // Calendar events
    User.hasMany(Calendar, {
        foreignKey: "createdBy",
    })

    Calendar.belongsTo(User, {
        foreignKey: "createdBy",
    })

    // Document management
    User.hasMany(Document, {
        foreignKey: "uploadedBy",
    })

    Document.belongsTo(User, {
        foreignKey: "uploadedBy",
    })

    User.hasMany(Document, {
        foreignKey: "lastmodifiedBy",
    })

    Document.belongsTo(User, {
        foreignKey: "lastmodifiedBy"
    })
}